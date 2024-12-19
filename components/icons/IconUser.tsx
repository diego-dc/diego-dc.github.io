import React from "react";

interface IconProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
  [key: string]: any;
}

const IconUser: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  fill = "currentColor",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
      {...props}
    >
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
    </svg>
  );
};

export default IconUser;