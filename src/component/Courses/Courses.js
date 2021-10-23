import React from "react";

const Courses = (props) => {
  console.log(props.course);
  const { t, c, r, i, k } = props.course;
  // t = title , c = category , r = renew price , i = image , k = key
  return (
    <div className="col">
      <div className="card">
        <img src={i} className="card-img-top w-25" alt="" />
        <div className="card-body">
          <h5 className="card-title">{t}</h5>
          <h2 className="card-title bg-warning w-50 rounded-pill">
            Enroll Price : {r}
          </h2>
          <p className="card-text bg-success rounded-pill  text-white w-25 p-2">
            Category : {c}
          </p>
          <button className="btn bg-danger">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
