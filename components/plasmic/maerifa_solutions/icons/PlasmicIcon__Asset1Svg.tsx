// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Asset1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Asset1SvgIcon(props: Asset1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 12.24 10.6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
        d={"M8.891.5H3.35L.577 5.3l2.772 4.8H8.89l2.771-4.8L8.892.5z"}
      ></path>
    </svg>
  );
}

export default Asset1SvgIcon;
/* prettier-ignore-end */
