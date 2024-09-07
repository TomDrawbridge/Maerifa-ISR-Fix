// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
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
        d={
          "M28.571 1.429H11.43a2.857 2.857 0 00-2.86 2.857v31.428a2.857 2.857 0 002.858 2.857H28.57a2.857 2.857 0 002.858-2.857V4.286a2.857 2.857 0 00-2.858-2.857zM8.571 10H1.43m7.141 10H1.43m7.141 10H1.43m37.141-20H31.43m7.141 10H31.43m7.141 10H31.43m-12.859 0h5.715"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
