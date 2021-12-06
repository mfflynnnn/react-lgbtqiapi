import React from "react";

export default function Results(props) {
  console.log("PropsResults", props);
  return (
    <div className="col-4">
      <img src={props.results} className="img-fluid" alt="" />
    </div>
  );
}
