import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import axios from "axios";

const PROMPT = `Genrate Learning Course depends on following details. In which Make sure to add Course Name, Description,Course Banner Image Prompt (Create a modern, flat-style 2D digital illustration representing user Topic. Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools. Add symbolic elements related to user Course, like sticky notes, design components, and visual aids. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course) for Course Banner in 3d format Chapter Name, , Topic under each chapters , Duration for each chapters etc, in JSON format only

Schema:

{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",

"bannerImagePrompt": "string",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": [
          "string"
        ],
     
      }
    ]
  }
}

, User Input: 

`;


export async function POST(req: NextRequest) {

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const {courseId, ...formData} = await req.json();
  const user = await currentUser();

  const config = {
    responseMimeType: "text/plain",
  };
  const model = "gemini-2.0-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: PROMPT + JSON.stringify(formData),
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
    return NextResponse.json(
      { error: "No response from model" },
      { status: 500 }
    );
  }

  const rawJson = rawResp.replace("```json", "").replace("```", "").trim();

  let jsonResp;

  try {
    jsonResp = JSON.parse(rawJson);
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON format", details: err },
      { status: 500 }
    );
  }

  const ImagePrompt = jsonResp.course?.bannerImagePrompt;
  const bannerImageUrl = await GenerateImage(ImagePrompt);
  await db.insert(coursesTable).values({
    ...formData,
    courseJson:jsonResp,
    userEmail:user?.primaryEmailAddress?.emailAddress,
    courseId:courseId,
    bannerImageUrl:bannerImageUrl
  })
  return NextResponse.json({courseId:courseId});
}


const GenerateImage = async (ImagePrompt:{ImagePrompt: string}) => {
  const BASE_URL='https://aigurulab.tech';
  const result = await axios.post(BASE_URL+'/api/generate-image',
          {
              width: 1024,
              height: 1024,
              input: ImagePrompt,
              model: 'sdxl',//'flux'
              aspectRatio:"16:9"//Applicable to Flux model only
          },
          {
              headers: {
                  'x-api-key': process.env?.IMAGE_API_KEY, // Your API Key
                  'Content-Type': 'application/json', // Content Type
              },
          })
  return result.data.image;
}