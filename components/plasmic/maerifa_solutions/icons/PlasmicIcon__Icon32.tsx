// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon32Icon(props: Icon32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      stroke={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        style={{
          transformOrigin: "center",
          animation: 'spinner_zKoa 2s linear infinite"',
        }}
      >
        <circle
          cx={"12"}
          cy={"12"}
          r={"9.5"}
          fill={"none"}
          strokeWidth={"3"}
          style={{
            animation: 'spinner_YpZS 1.5s ease-in-out infinite"',
          }}
          strokeLinecap={"round"}
        ></circle>
      </g>
    </svg>
  );
}

export default Icon32Icon;
/* prettier-ignore-end */
