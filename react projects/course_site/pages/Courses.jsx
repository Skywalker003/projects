import React from 'react'
import Course_hero from '../src/components/Course_hero'
import useFetch from '../src/components/useFetch'
import Course_course from '../src/components/Course_course';
import LearningPath from '../src/components/LearningPath';
import Footer from '../src/components/Footer';

export default function Courses() {

  const { courseList, loading, error } = useFetch("http://localhost:3000/courses");


  return (
    <>
      <Course_hero
        courseCount={courseList?.length || 0}
        loading={loading}
        error={error}
      />
      <Course_course />
      <LearningPath />
      <Footer />
    </>
  )
}
