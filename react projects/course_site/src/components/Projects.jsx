import Project from "./Project"
import useFetch from "./useFetch"

export default function Projects(){

    const { courseList , loading, error } = useFetch(
    "http://localhost:3000/projects"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const projectList = courseList.slice(0,3);

    return (
        <section className="projects-section">
            <h1>Projects You Will <span>Build</span></h1>
            <div className="card-container">
                {[...projectList]
                    .map(
                        ({ id, title, image, description, tech } /*, index*/) => ( //destructured instead of (course) and then course.id, course.title etc
                        <Project
                            key={id}// index can also be used as key but id is better
                            title={title}
                            image={image}
                            description={description}
                            tech={tech}
                            id={id}//it seems we cant use key prop so we pass id prop to use 
                        />
                        )
                    )}
            </div>
        </section>
    )
}