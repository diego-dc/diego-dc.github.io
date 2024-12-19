import React from "react";

interface IconProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
  [key: string]: any;
}

const IconWindowMinimize: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      fill={fill}
      {...props}
    >
      <path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"></path>
    </svg>
  );
};

export default IconWindowMinimize;
