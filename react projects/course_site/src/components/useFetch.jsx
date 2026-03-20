import React from "react";


const useFetch = (url) => {

    // keeping fetch logic inside one reusable hook
    const [courseList, setCourseList] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
    // refetching whenever a different url is passed to this hook
    fetch(url)
        .then((res) => {
        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        return res.json();
        })
        .then((json) => {
        setCourseList(json);
        setLoading(false);
        })
        .catch((err) => {
        setError(err.message);
        setLoading(false);
        });
    }, [url]);

    function hideCourse(id) {
    // removing a course from the current list only on the frontend side
    setCourseList((prev) => prev.filter((course) => course.id !== id));
  }

    return { courseList, loading, error, hideCourse };
    };

export default useFetch;
