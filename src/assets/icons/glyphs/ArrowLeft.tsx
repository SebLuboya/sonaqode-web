import React from "react";

function ArrowLeft(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg viewBox="7 7 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="arrowRight">
        <line
          fill="none"
          stroke="#0E6BA4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          x1="31"
          x2="1"
          y1="16"
          y2="16"
        />
        <line
          fill="none"
          stroke="#0E6BA4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          x1="32"
          x2="25.08"
          y1="16"
          y2="21"
        />
        <line
          fill="none"
          stroke="#0E6BA4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          x1="32"
          x2="25.08"
          y1="16"
          y2="11"
        />
      </g>
    </svg>
  );
}

export default ArrowLeft;
