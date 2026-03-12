import Card from "./Card";
import React from "react";
import useFetch from "./useFetch";

export default function Course_course() {

    const { courseList, loading, error , hideCourse } = useFetch(
    "http://localhost:3000/courses"
  );

  const [selectedLevel, setSelectedLevel] = React.useState("All");

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

  const filteredCourses = [...courseList]
        .sort((a, b) => levelOrder[a.level] - levelOrder[b.level])
        .filter((course) => {
          if(selectedLevel === "All") {
            return levelOrder[course.level] <= levelOrder["Intermediate"];
          }
          return course.level === selectedLevel;
        });

  return (
    <>
        <h1 id="courses">All <span>Courses</span></h1>
        <div className="course-filters">
          <button
            className={selectedLevel === "All" ? "filter-btn active-filter" : "filter-btn"}
            onClick={() => setSelectedLevel("All")}
          >
            All
          </button>

          <button
            className={selectedLevel === "Beginner" ? "filter-btn active-filter" : "filter-btn"}
            onClick={() => setSelectedLevel("Beginner")}
          >
            Beginner
          </button>

          <button
            className={selectedLevel === "Intermediate" ? "filter-btn active-filter" : "filter-btn"}
            onClick={() => setSelectedLevel("Intermediate")}
          >
            Intermediate
          </button>
        </div>

        <div className="card-container">
        {filteredCourses.map(
          ({ id, title, image, description, difficulty, level, shown } /*, index*/) => ( //destructured instead of (course) and then course.id, course.title etc
          <Card
              key={id}// index can also be used as key but id is better
              title={title}
              image={image}
              description={description}
              difficulty={difficulty}
              level={level}
              shown={shown}
              hide={hideCourse}
              id={id}//it seems we cant use key prop so we pass id prop to use 
          />
          )
        )}
        </div>
    </>
  )
}
