"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Book, Clock, Loader2Icon, PlayCircle, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

// Define the types
interface Chapter {
  id: string;
  title: string;
  chapterName: string;
  topics: [];
  duration: string;
}

interface CourseData {
  name: string;
  description: string;
  level: string;
  chapters: Chapter[];
  noOfChapters: number;
}

interface CourseJson {
  course: CourseData;
}

interface courseContent {}

interface courses {
  bannerImageUrl: string;
  name: string;
  description: string;
  noOfChapters: number;
}

export interface Course {
  bannerImageUrl: string;
  courseJson?: CourseJson;
  name: string;
  courseId: string;
  courseContent: courseContent[];
  courses: courses;
}

// Component props type
interface CourseInfoProps {
  course: Course;
}

const CourseInfo = ({
  course,
  isViewPage,
}: {
  isViewPage: boolean;
  course: Course;
}) => {
  const courseInfo = course?.courseJson?.course;
  const bannerImageUrl = course?.bannerImageUrl;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const GenerateCourseContent = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/api/generate-course-content", {
        courseJson: course?.courseJson?.course,
        courseTitle: course?.name,
        courseId: course?.courseId,
      });

      console.log(result.data);
      router.replace("/workspace");
      toast.success("Course Generated successfully");
    } catch (err: any) {
      console.error("Client Error:", err.response?.data || err.message);
      toast.error("Server side error! Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 p-5 rounded-2xl shadow">
      <div className="flex flex-col gap-3 flex-1">
        <h2 className="font-bold text-3xl">{courseInfo?.name}</h2>
        <p className="line-clamp-2 text-gray-500">{courseInfo?.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <Clock className="text-blue-500" />
            <section>
              <h2 className="font-bold">Duration</h2>
              <h2>5 Hours</h2>
            </section>
          </div>

          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <Book className="text-green-500" />
            <section>
              <h2 className="font-bold">Chapters</h2>
              <h2>{courseInfo?.chapters?.length ?? 0}</h2>
            </section>
          </div>

          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <TrendingUp className="text-red-500" />
            <section>
              <h2 className="font-bold">Difficulty</h2>
              <h2>{courseInfo?.level}</h2>
            </section>
          </div>
        </div>
        {isViewPage ? (
          <Link href={"/course/" + course.courseId} className="w-full">
            <Button className="w-full">
              {" "}
              <PlayCircle /> Start Learning
            </Button>
          </Link>
        ) : (
          <Button onClick={GenerateCourseContent} disabled={loading}>
            {loading && <Loader2Icon className="animate-spin" />} Generate
            Content
          </Button>
        )}
      </div>

      <div className="mt-5 md:mt-0">
        <Image
          src={bannerImageUrl}
          height={240}
          width={400}
          alt="Course Banner"
          className="rounded-2xl object-cover h-[240px] aspect-auto"
        />
      </div>
    </div>
  );
};

export default CourseInfo;
