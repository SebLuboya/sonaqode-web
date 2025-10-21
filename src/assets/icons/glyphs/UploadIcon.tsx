import React from "react";

function UploadIcon(props: React.JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3" y="3" width="40" height="40" rx="20" fill="#F2F4F7" />
      <rect
        x="3"
        y="3"
        width="40"
        height="40"
        rx="20"
        stroke="#F9FAFB"
        strokeWidth="6"
      />
      <path
        d="M19.666 26.3333L22.9993 23M22.9993 23L26.3327 26.3333M22.9993 23V30.5M29.666 26.9524C30.6839 26.1117 31.3327 24.8399 31.3327 23.4167C31.3327 20.8854 29.2807 18.8333 26.7493 18.8333C26.5673 18.8333 26.3969 18.7383 26.3044 18.5814C25.2177 16.7374 23.2114 15.5 20.916 15.5C17.4642 15.5 14.666 18.2982 14.666 21.75C14.666 23.4718 15.3622 25.0309 16.4885 26.1613"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UploadIcon;
