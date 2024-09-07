// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
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

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={
          "M3.123 29.375a4.375 4.375 0 108.75 0 4.375 4.375 0 00-8.75 0zm10.625 9.375a7.083 7.083 0 00-12.5 0m26.875-9.375a4.375 4.375 0 108.75 0 4.375 4.375 0 00-8.75 0zm10.625 9.375a7.083 7.083 0 00-12.5 0M15.623 5.625a4.375 4.375 0 108.75 0 4.375 4.375 0 00-8.75 0zm9.79 8.125a7.115 7.115 0 00-10.833 0m.503 19.095a13.796 13.796 0 009.907-.03M10.58 10a13.695 13.695 0 00-4.333 10c0 .422.025.833.063 1.25m27.375 0a14.2 14.2 0 00.063-1.25 13.692 13.692 0 00-4.333-10"
        }
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
