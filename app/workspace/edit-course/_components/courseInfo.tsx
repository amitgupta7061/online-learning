import { Button } from '@/components/ui/button';
import { Book, Clock, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// Define the types
export interface Chapter {
  id: string;
  title: string;
}

export interface CourseData {
  name: string;
  description: string;
  level: string;
  chapters: Chapter[];
}

export interface CourseJson {
  course: CourseData;
}

export interface Course {
  bannerImageUrl: string;
  courseJson?: CourseJson;
}

// Component props type
interface CourseInfoProps {
  course: Course;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ course }) => {
  const courseInfo = course?.courseJson?.course;
  const bannerImageUrl = course?.bannerImageUrl;

  return (
    <div className='flex flex-col md:flex-row justify-between gap-5 p-5 rounded-2xl shadow'>
      <div className='flex flex-col gap-3 flex-1'>
        <h2 className='font-bold text-3xl'>{courseInfo?.name}</h2>
        <p className='line-clamp-2 text-gray-500'>{courseInfo?.description}</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-4'>
          <div className='flex gap-5 items-center p-3 rounded-lg shadow'>
            <Clock className='text-blue-500' />
            <section>
              <h2 className='font-bold'>Duration</h2>
              <h2>5 Hours</h2>
            </section>
          </div>

          <div className='flex gap-5 items-center p-3 rounded-lg shadow'>
            <Book className='text-green-500' />
            <section>
              <h2 className='font-bold'>Chapters</h2>
              <h2>{courseInfo?.chapters?.length ?? 0}</h2>
            </section>
          </div>

          <div className='flex gap-5 items-center p-3 rounded-lg shadow'>
            <TrendingUp className='text-red-500' />
            <section>
              <h2 className='font-bold'>Difficulty</h2>
              <h2>{courseInfo?.level}</h2>
            </section>
          </div>
        </div>
        <Button>Generate Content</Button>
      </div>

      <div className='mt-5 md:mt-0'>
        <Image
          src={bannerImageUrl}
          height={240}
          width={400}
          alt='Course Banner'
          className='rounded-2xl object-cover h-[240px] aspect-auto'
        />
      </div>
    </div>
  );
};

export default CourseInfo;
