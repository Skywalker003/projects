import React from 'react'
import Course_hero from '../src/components/Course_hero'
import useFetch from '../src/components/useFetch'


export default function Courses() {

  const { courseList, loading, error } = useFetch("http://localhost:3000/courses");


  return (
    <>
      <Course_hero
        courseCount={courseList?.length || 0}
        loading={loading}
        error={error}
      />
    </>
  )
}
