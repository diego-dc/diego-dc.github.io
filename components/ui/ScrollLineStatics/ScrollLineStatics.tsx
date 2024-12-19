import React from "react";

import "./ScrollLineStatics.css";

interface ScrollLineStaticsProps {
  width?: string;
  children: React.ReactNode;
}

const ScrollLineStatics: React.FC<ScrollLineStaticsProps> = ({
  width = "w-4/5",
  children,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-0 px-4 lg:px-8 xl:px-0 imageContainer ${width}`}
    >
      <div
        className="top-0 scroll-line-static-top"
        style={{ height: `9rem` }}
      ></div>
      {children}
      <div
        className="top-0 scroll-line-static-bottom"
        style={{ height: `9rem` }}
      ></div>
    </div>
  );
};

export default ScrollLineStatics;
