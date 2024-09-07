// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoonSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoonSvgrepoComSvgIcon(props: MoonSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.32 11.684a9 9 0 0017.357 3.348A9 9 0 018.32 6.683c0-1.18.23-2.32.644-3.353a9.003 9.003 0 00-5.645 8.354z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoonSvgrepoComSvgIcon;
/* prettier-ignore-end */
