import React from "react";

function CourseDetails() {

  const courses = [
    {
      id: 1,
      name: "React Development",
      duration: "30 Days"
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      duration: "45 Days"
    },
    {
      id: 3,
      name: "Frontend Development",
      duration: "60 Days"
    }
  ];


  return (
    <div>

      <h2>Course Details</h2>

      <ul>

        {
          courses.map(course => (

            <li key={course.id}>

              Course: {course.name}
              <br />

              Duration: {course.duration}

            </li>

          ))
        }

      </ul>

    </div>
  );
}

export default CourseDetails;