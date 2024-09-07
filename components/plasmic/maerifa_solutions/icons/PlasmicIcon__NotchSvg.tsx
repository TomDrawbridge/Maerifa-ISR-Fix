// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotchSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotchSvgIcon(props: NotchSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 748 72"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M588.054 72h39.004a50.002 50.002 0 0035.356-14.645l41.768-41.768A49.997 49.997 0 01739.533.943H8.475a50 50 0 0135.343 14.644l41.768 41.768A50 50 0 00120.942 72h467.112z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NotchSvgIcon;
/* prettier-ignore-end */
