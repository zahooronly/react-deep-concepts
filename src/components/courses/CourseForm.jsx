import React, { useState } from "react";
import useCourseStore from "../../../app/courseStore";

export const CourseForm = () => {
  const [courseTitle, setCourseTitle] = useState("");

  const addCourse = useCourseStore((state) => state.addCourse);

  const handleAddCourse = () => {
    if (!courseTitle) return alert("Course title is not provided");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };
  return (
    <div>
      <h1>Course Form</h1>
      <form>
        <div>
          <label htmlFor="course-title">Course Title</label>
          <input onChange={(e)=>setCourseTitle(e.target.value)} type="text" id="course-title" />
        </div>
        <button onClick={() => handleAddCourse()} type="submit">
          Add Course
        </button>
      </form>
    </div>
  );
};
