"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CourseInfo from "../_components/courseInfo";
import type { Course } from "../_components/courseInfo"; // import Course type

const EditCourse = () => {
  const params = useParams();
  const courseId = params.courseId as string;
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState<Course | undefined>(undefined); // <-- Typed properly

  useEffect(() => {
    GetCourseInfo();
  }, []);

  const GetCourseInfo = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/courses", { params: { courseId } });
      setCourse(result.data);
    } catch (error) {
      console.error("Failed to load course", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && course && <CourseInfo course={course} />}
    </div>
  );
};

export default EditCourse;
