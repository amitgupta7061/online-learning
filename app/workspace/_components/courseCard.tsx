import Image from "next/image";
import React from "react";
import type { Course } from "../edit-course/_components/courseInfo";
import { Book, Edit, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CourseCard = ({ course }: { course: Course }) => {
  const courseJson = course?.courseJson?.course;

  const onEnrollCourse = () => {

  }

  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={course?.bannerImageUrl}
        height={250}
        width={400}
        alt="Course Banner"
        className="w-full h-[200px] object-cover rounded-t-2xl"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {courseJson?.name}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          {courseJson?.description}
        </p>
        <div className="flex items-center justify-between pt-4">
          <span className="flex items-center gap-1 text-gray-700">
            <Book className="w-5 h-5" />
            <span className="text-sm">{courseJson?.noOfChapters} Chapters</span>
          </span>
          {course?.courseContent?.length ? (
            <Link href={""}>
              <Button className="flex items-center gap-2" onClick={onEnrollCourse}>
                <PlayCircle className="w-5 h-5" />
                Enroll Course
              </Button>
            </Link>
          ) : (
            <Link href={'/workspace/edit-course/' + course?.courseId}>
              <Button className="flex items-center gap-2">
                <Edit className="w-5 h-5" />
                Continue Edit
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// 3:12:46
