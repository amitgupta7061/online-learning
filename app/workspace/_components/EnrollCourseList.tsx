"use client";

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CourseCard from './courseCard';
import EnrollCourseCard from './EnrollCourseCard';

const EnrollCourseList = () => {

    const [enrollCourseList, setEnrollCourseList] = useState([]);

    useEffect(() => {
        GetEnrollCourse();
    }, [])

    const GetEnrollCourse = async () => {
        const result = await axios.get('/api/enroll-course');
        setEnrollCourseList(result.data);
    }

  return enrollCourseList.length > 0 && (
    <div>
      <h2 className='font-bold text-2xl mt-10'>Continue Learning Your Courses</h2>

      {enrollCourseList.map((course, index) => (
        <EnrollCourseCard course={course} key={index}/>
      ))}
    </div>
  )
}

export default EnrollCourseList
