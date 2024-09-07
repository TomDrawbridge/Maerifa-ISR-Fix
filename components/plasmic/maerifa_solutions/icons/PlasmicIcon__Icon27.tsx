// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-0.5 0 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12.28 3.39H4.99a4 4 0 00-4 4v10a4 4 0 004 4h12a4 4 0 004-4V12.1"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.62 11.51a7.24 7.24 0 01-4.611 1.88c-3.21 0-6.41-2.67-9.22-8m17.221-4l1.41 2.27 2.59.64-1.72 2.04.19 2.66-2.47-1-2.47 1 .18-2.66-1.71-2.04 2.59-.64 1.41-2.27z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */
