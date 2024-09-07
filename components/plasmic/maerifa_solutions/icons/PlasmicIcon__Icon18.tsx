// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
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
            "M7.143 25.238H1.939m36.121 0h-5.203M7.143 14.762H1.939m36.121 0h-5.203M14.762 7.143V1.939m0 36.121v-5.203M25.238 7.143V1.939m0 36.121v-5.203M30 7.143H10A2.857 2.857 0 007.143 10v20A2.857 2.857 0 0010 32.857h20A2.857 2.857 0 0032.857 30V10A2.857 2.857 0 0030 7.143z"
          }
        ></path>

        <path
          d={
            "M13.334 20.716c-.804-.14-.804-1.293 0-1.433a7.275 7.275 0 005.86-5.612l.048-.221c.174-.794 1.305-.8 1.486-.006l.059.257a7.312 7.312 0 005.876 5.578c.808.14.808 1.3 0 1.441a7.312 7.312 0 00-5.876 5.578l-.059.258c-.18.793-1.312.788-1.486-.007l-.048-.22a7.275 7.275 0 00-5.86-5.613z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
