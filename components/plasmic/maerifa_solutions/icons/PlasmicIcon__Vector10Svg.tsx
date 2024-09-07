// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10SvgIcon(props: Vector10SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 552"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.747 551.265L5.233 524.75a15 15 0 01-4.394-10.607V38.253a15 15 0 014.394-10.607L31.747 1.13"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10SvgIcon;
/* prettier-ignore-end */
