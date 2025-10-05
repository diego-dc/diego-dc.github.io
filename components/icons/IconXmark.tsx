import React from "react";

interface IconProps
  extends Omit<
    React.SVGProps<SVGSVGElement>,
    "width" | "height" | "stroke" | "fill"
  > {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
}

const IconXmark: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  fill = "none",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default IconXmark;
