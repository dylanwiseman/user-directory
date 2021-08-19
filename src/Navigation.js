import React from "react";
import "./App.css";

export default function Navigation(props) {
  return (
    <div className="buttonsDiv">
      <button
        className="prev"
        onClick={() => {
          props.goPrevious();
        }}
      >
        {`<`} Previous
      </button>
      <button className="actions" onClick={() => props.deleteFn()}>
        Delete
      </button>
      <button className="actions">Edit</button>
      <button className="actions">New</button>
      <button
        className="next"
        onClick={() => {
          props.goNext();
        }}
      >
        Next {`>`}
      </button>
    </div>
  );
}
