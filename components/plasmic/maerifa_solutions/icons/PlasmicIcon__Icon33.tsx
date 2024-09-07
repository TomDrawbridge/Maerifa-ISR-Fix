// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon33Icon(props: Icon33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 19a8 8 0 118-8 8 8 0 01-8 8z"
        }
        opacity={".25"}
      ></path>

      <path
        d={
          "M10.72 19.9a8 8 0 01-6.5-9.79 7.77 7.77 0 016.18-5.95 8 8 0 019.49 6.52A1.54 1.54 0 0021.38 12h.13a1.37 1.37 0 001.38-1.54 11 11 0 10-12.7 12.39A1.54 1.54 0 0012 21.34a1.47 1.47 0 00-1.28-1.44z"
        }
        style={{
          transformOrigin: "center",
          animation: 'spinner_sEAn .75s infinite linear"',
        }}
      ></path>
    </svg>
  );
}

export default Icon33Icon;
/* prettier-ignore-end */
