// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"-1 -1 42 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      >
        <path
          d={
            "M32.857 5.714l5.714 5.715-5.714 5.714m-8.571-5.714H38.57m-5.713 11.428l5.714 5.714-5.714 5.715"
          }
        ></path>

        <path d={"M1.429 11.429h10L22.857 28.57h15.714m-37.142.001h10"}></path>
      </g>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
