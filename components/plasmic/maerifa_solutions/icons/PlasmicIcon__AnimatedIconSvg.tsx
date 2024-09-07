// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnimatedIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnimatedIconSvgIcon(props: AnimatedIconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 83.914 51.104"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}
    </svg>
  );
}

export default AnimatedIconSvgIcon;
/* prettier-ignore-end */
