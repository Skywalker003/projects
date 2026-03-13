/*import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/javascript.jpg";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
*/

//import { courses } from "../data/coursesData";
import Card from "./Card";
import React from "react";
import useFetch from "./useFetch";

export default function Course() {
  const { courseList, loading, error, hideCourse } = useFetch(
    "http://localhost:3000/courses"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  /*function handleHide(id){
    setCourseList([...courseList].filter((course) => course.id != id));
  }*/

  const levelOrder = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
  };

  return (
    <>
      <div className="section-heading">
        <p className="section-kicker">Featured learning</p>
        <h1 id="courses">Featured <span>Courses</span></h1>
      </div>
      <div className="card-container">
        {[...courseList]
          .sort((a, b) => levelOrder[a.level] - levelOrder[b.level])
          .filter((course) => levelOrder[course.level] <= levelOrder["Intermediate"])
          .map(
            ({ id, title, image, description, difficulty, level, shown } /*, index*/) => (
              <Card
                key={id}
                title={title}
                image={image}
                description={description}
                difficulty={difficulty}
                level={level}
                shown={shown}
                hide={hideCourse}
                id={id}
              />
            )
          )}
      </div>
    </>
  );
}
