// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
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
            "M14.343 9.958h-10a2.857 2.857 0 00-2.857 2.857v22.858a2.857 2.857 0 002.857 2.857h25.714a2.857 2.857 0 002.857-2.857v-11.43M1.486 17.101h18.571"
          }
        ></path>

        <path
          d={
            "M8.629 31.387l4.285-4.286-4.285-4.286m8.571 8.572h4.286m-.355-20.105c-1.002-.175-1.002-1.614 0-1.789a9.075 9.075 0 007.31-7l.06-.276c.218-.991 1.629-.997 1.854-.008l.074.322a9.121 9.121 0 007.33 6.958c1.007.175 1.007 1.622 0 1.797a9.121 9.121 0 00-7.33 6.959l-.074.321c-.225.99-1.636.983-1.853-.008l-.06-.276a9.075 9.075 0 00-7.31-7z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
