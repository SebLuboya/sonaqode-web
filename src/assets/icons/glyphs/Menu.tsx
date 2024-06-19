import React from "react";

function Menu(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.833 30.834L15.4163 30.834M30.833 20.0423L6.16634 20.0423M30.833 9.25065L6.16634 9.25065"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Menu;
