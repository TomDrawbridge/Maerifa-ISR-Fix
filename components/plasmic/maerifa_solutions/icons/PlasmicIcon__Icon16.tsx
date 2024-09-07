// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
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
            "M10 38.571H4.286a2.858 2.858 0 01-2.857-2.857V12.857H38.57v22.857a2.857 2.857 0 01-2.857 2.857H30"
          }
        ></path>

        <path
          d={
            "M12.857 28.571L20 21.43l7.143 7.142M20 21.429V38.57M32.257 2.857a2.858 2.858 0 00-2.4-1.428H10.143a2.857 2.857 0 00-2.4 1.428l-6.314 10H38.57l-6.314-10zM20 1.429v11.428"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
