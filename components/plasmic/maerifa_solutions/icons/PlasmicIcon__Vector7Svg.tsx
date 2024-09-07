// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7SvgIcon(props: Vector7SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 49"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.757 1.38h3.32A16 16 0 0115.39 6.067l27.81 27.81a16 16 0 014.686 11.313v3.115"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7SvgIcon;
/* prettier-ignore-end */
