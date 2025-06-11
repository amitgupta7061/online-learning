import { ReactNode } from "react";

interface YouTubeVideo {
  title: string;
  url: string;
  duration: string;
  thumbnailUrl?: string;
}


interface CourseData {
  title: string;
  description: string;
  chapterNumber: number;
  duration: string;
  topics: string[];
  bannerImageUrl: string;
  name: string;
  noOfChapters: number;
  courseId: string
}


interface CourseModule {
  youtubeVideo: YouTubeVideo[];
  courseData: CourseData;
}

interface chapter {
  chapterName: string
  duration   : number
  topics     : string
}

interface CourseJson {
  name: string;
  description: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  includeVideo: boolean;
  noOfChapters: number;
  userEmail: string;
  chapters:chapter[];
}


interface EnrollCourse {
  id: number;
  courseId: string;
  userEmail: string;
  completedChapters: [];
}


export interface Course {
  id: number;
  courseId: string;
  name: string;
  description: string;
  category: string;
  bannerImageUrl: string;
  level: string,
  includeVideo: boolean;
  noOfChapter: number;
  userEmail: string;
  courses: CourseData,
  courseJson: {
    course: CourseJson;
  };

  courseContent: CourseModule[];

  enrollCourse?: EnrollCourse;
}
