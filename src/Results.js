import React from "react";

export default function Results(props) {
  console.log("PropsResults", props);
  if (props.results && props.results.data && props.results.data.length) {
    return (
      <div className="row Results">
        {props.results.data.flag.map(function (flag, index) {
          return (
            <div className="col-4" key={index}>
              <img src={flag} className="img-fluid" alt=""></img>
            </div>
          );
        })}
      </div>
    );
  }
}
