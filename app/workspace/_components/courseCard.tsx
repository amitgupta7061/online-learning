import Image from 'next/image'
import React from 'react'
import type { Course } from "../edit-course/_components/courseInfo";

const CourseCard = ({course}:{course: Course}) => {

    const courseJson = course?.courseJson?.course;

  return (
    <div>
      <Image src={course?.bannerImageUrl} height={400} width={300} alt='banner' className='w-full h-[250px] rounded-t-xl object-cover'/>
      <p>{courseJson?.name}</p>
      <p className='line-clamp-2'>{courseJson?.description}</p>
    </div>
  )
}

export default CourseCard


// 3:12:46