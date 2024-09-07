// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalBlackHexagonSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function HorizontalBlackHexagonSvgrepoComSvgIcon(
  props: HorizontalBlackHexagonSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 72 72"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={
          "M7.577 37a2.001 2.001 0 010-2l13.346-23.115c.357-.619 1.017-1 1.732-1h26.69c.715 0 1.375.381 1.732 1L64.423 35a2.001 2.001 0 010 2L51.077 60.115c-.357.619-1.017 1-1.732 1h-26.69a1.999 1.999 0 01-1.732-1L7.577 37z"
        }
      ></path>
    </svg>
  );
}

export default HorizontalBlackHexagonSvgrepoComSvgIcon;
/* prettier-ignore-end */
