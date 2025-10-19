"use client";
import {
  HomeBanner,
  HomeBanner2,
  HomeBanner3,
  HomeBanner4,
} from "@/assets/images";
import { cn } from "@/utils";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MotionImage = motion(Image);

const homeImages = [HomeBanner, HomeBanner2, HomeBanner3, HomeBanner4];

const HomeImageCarosel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % homeImages.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <>
      {homeImages.map((image, index) => (
        <MotionImage
          key={index}
          initial={{ opacity: index === currentImage ? 1 : 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          src={image}
          objectFit="cover"
          alt="home-banner"
          className={cn("absolute top-0 left-0 w-full h-full object-cover")}
          placeholder="blur"
        />
      ))}
    </>
  );
};

export default HomeImageCarosel;
