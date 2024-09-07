// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon31Icon(props: Icon31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g stroke={"none"} strokeWidth={"1"} fill={"none"} fillRule={"evenodd"}>
        <path d={"M0 0h24v24H0z"}></path>

        <path
          stroke={"currentColor"}
          strokeWidth={"2"}
          strokeLinecap={"round"}
          d={"M5 7h14M5 17h14M5 12h14"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon31Icon;
/* prettier-ignore-end */
