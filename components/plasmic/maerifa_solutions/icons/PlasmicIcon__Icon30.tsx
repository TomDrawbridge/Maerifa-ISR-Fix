// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon30Icon(props: Icon30IconProps) {
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
          "M12 21.25a.69.69 0 01-.41-.13c-.3-.19-7.34-4.92-7.34-10.67a7.75 7.75 0 1115.5 0c0 5.75-7 10.48-7.34 10.67a.69.69 0 01-.41.13zm0-17a6.23 6.23 0 00-6.25 6.2c0 4.21 4.79 8.06 6.25 9.13 1.46-1.07 6.25-4.92 6.25-9.13A6.23 6.23 0 0012 4.25z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 12.75a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon30Icon;
/* prettier-ignore-end */
