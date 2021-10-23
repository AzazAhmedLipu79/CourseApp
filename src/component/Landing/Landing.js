import Courses from "../Courses/Courses";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
const Landing = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://my.api.mockaroo.com/users.json?key=22f28220")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <div className="container-fluid row row-cols-1 row-cols-md-2 g-4">
        <h2>Landing Page {courses.length}</h2>
        {courses.map((course) => (
          <Courses course={course}></Courses>
        ))}
      </div>

      <div>
        <div className="bg-success py-2 px-4 fixed-bottom w-25 rounded">
          <h2>You Added 00 Courses</h2>
          <h6>Courses Price : 00</h6>
          <h6>Tax : 00</h6>
          <h6>Total :00</h6>
        </div>
      </div>
    </>
  );
};

export default Landing;
