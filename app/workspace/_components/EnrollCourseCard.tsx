import React from 'react'
import Link from "next/link"
import Image from 'next/image';
import { Book, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Course } from '@/lib/types';

const EnrollCourseCard = ({course}:{ course: Course}) => {
    console.log(course);
    const courseJson = course?.courses;

    const calculateProgress = () => {
      return (course.enrollCourse?.completedChapters?.length??0/course?.courseContent?.length) * 100 || 20;
    }

  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-5">
      <Image
        src={courseJson.bannerImageUrl}
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
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <p>Progress</p>
                <p>{calculateProgress()}%</p>
            </div>
            <Progress value={20} />
        </div>
        <Link className='' href={'/workspace/view-course/'+courseJson?.courseId}>
          <Button className="flex items-center w-full gap-2">
                <PlayCircle className="w-5 h-5" />
                Continue Learning
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default EnrollCourseCard
