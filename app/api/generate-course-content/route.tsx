import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";
import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { eq } from "drizzle-orm";

const PROMPT = `Depends on Chapter name and Topic Generate content for each topic in HTML and give response in JSON format. 
Schema:
{
  chapterName: <>,
  topics: [
    {
      topic: <>,
      content: <>
    }
  ]
}

User Input: `;

export async function POST(req: NextRequest) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
    const { courseJson, courseTitle, courseId } = await req.json();

    const promises = courseJson.chapters?.map(async (chapter: any) => {
      const config = {
        responseMimeType: "text/plain",
      };
      const model = "gemini-2.0-flash";

      const contents = [
        {
          role: "user",
          parts: [
            {
              text: PROMPT + JSON.stringify(chapter),
            },
          ],
        },
      ];

      const response = await ai.models.generateContent({
        model,
        config,
        contents,
      });

      const rawResp = response?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawResp) {
        throw new Error("No response from model");
      }

      const rawJson = rawResp.replace(/```json|```/g, "").trim();

      let jsonResp;
      try {
        jsonResp = JSON.parse(rawJson);
      } catch (err) {
        throw new Error("Invalid JSON format: " + err);
      }
      const ytData = await GetYtVideo(chapter?.chapterName);
      return {
        youtubeVideo: ytData,
        courseData  : jsonResp
      };
    });

    const CourseContent = await Promise.all(promises);

    // save to Db
    await db.update(coursesTable).set({
      courseContent: CourseContent
    }).where(eq(coursesTable.courseId,courseId));

    return NextResponse.json({
      courseTitle,
      courseId,
      CourseContent,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Unknown server error" },
      { status: 500 }
    );
  }
}

const YT_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

interface YouTubeVideo {
  videoId: string;
  title: string;
}

const GetYtVideo = async (topic: string): Promise<YouTubeVideo[]> => {
  const params = {
    part: 'snippet',
    q: topic,
    maxResults: 4,
    type: 'video',
    key: process.env.YT_API_KEY,
  };

  const resp = await axios.get(YT_BASE_URL, { params });
  const ytContent = resp.data.items;

  const videoList: YouTubeVideo[] = ytContent.map((item: any) => ({
    videoId: item.id?.videoId ?? '',
    title: item.snippet?.title ?? '',
  }));

  console.log(videoList);
  return videoList;
};
