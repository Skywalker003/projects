import React from 'react'
import Course_hero from '../src/components/Course_hero'
import useFetch from '../src/components/useFetch'
import Course_course from '../src/components/Course_course';
import LearningPath from '../src/components/LearningPath';
import Footer from '../src/components/Footer';
import { DATA_API_URL } from '../src/config';

export default function Courses() {

  const { courseList, loading, error } = useFetch(`${DATA_API_URL}/courses`);


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
