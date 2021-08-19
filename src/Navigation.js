import React from "react";

export default function Navigation(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.goPrevious();
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          props.goNext();
        }}
      >
        Next
      </button>
    </div>
  );
}
