/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'
import AddNewCourseDialog from './AddNewCourseDialog';
import { ArrowRight, Plus, PlusCircle } from 'lucide-react';

const CourseList = () => {

    const [courseList, setCourseList] = useState([]);

  return (
    <div className='mt-10'>
      <h2 className='font-bold text-3xl'>Course List</h2>

      {courseList?.length == 0?
        <div className='flex flex-col p-7 mt-1 justify-center items-center border rounded-xl'>
            <Image src={'/online-education.png'} alt='education' width={80} height={80}/>
            <h2 className='my-2 text-xl font-bold'>Look Like you haven&apos;t created any courses yet</h2>
            <AddNewCourseDialog>
                <Button>Create your first course <ArrowRight/></Button>
            </AddNewCourseDialog>
        </div>
        :
        <div>
            List of Courses
        </div>
      }
    </div>
  )
}

export default CourseList
