"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const CircleLoader = ({
  radius = 32,
  percentage = 100,
  innerColor = "#e74c3c",
  outerColor = "#e74c3c",
}) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="flex items-center justify-center h-[80px]">
      <svg width={80} height={80}>
        <motion.circle
          cx={40}
          cy={40}
          r={radius}
          fill="none"
          stroke={outerColor}
          strokeWidth={14}
          strokeLinecap="butt"
          transform="rotate(-90 40 40)"
          initial={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference, // Start empty
          }}
          animate={{
            strokeDashoffset: isInView ? strokeDashoffset : circumference,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <circle cx="40" cy="40" r={14} fill={innerColor} />
      </svg>
    </div>
  );
};

export default CircleLoader;
