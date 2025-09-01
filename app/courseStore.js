import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({ courses: [course, ...state.courses] }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              status: course.status === "active" ? "inactive" : "active",
            }
          : course
      ),
    }));
  },
});
const useCourseStore = create(
  devtools(persist(courseStore, { name: "courses" }))
);
export default useCourseStore;
