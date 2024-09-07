// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logoipsum311SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logoipsum311SvgIcon(props: Logoipsum311SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 169 40"}
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
          "M10.015 2.5V40H0V2.5h10.015zm5.007 0h21.282c6.913 0 12.518 5.596 12.518 12.5s-5.605 12.5-12.518 12.5H25.037V40H15.022V2.5zm10.015 15h11.267a2.502 2.502 0 002.503-2.5c0-1.38-1.12-2.5-2.503-2.5H25.037v5zm61.341-15v19.375c0 4.487 3.643 8.125 8.137 8.125 4.494 0 8.137-3.638 8.137-8.125V2.5h10.015v19.375c0 10.01-8.127 18.125-18.152 18.125s-18.152-8.115-18.152-18.125V2.5h10.015z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M52.578 20c0-9.665 7.846-17.5 17.526-17.5h2.503v10h-2.503c-4.149 0-7.511 3.358-7.511 7.5v1.25c0 10.355-8.408 18.75-18.778 18.75h-1.252V30h1.252c4.84 0 8.763-3.918 8.763-8.75V20z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M169 3.75a3.753 3.753 0 01-3.756 3.75 3.752 3.752 0 01-3.755-3.75A3.752 3.752 0 01165.244 0 3.753 3.753 0 01169 3.75zM123.42 40l4.779-19.982 3.553 12.021c2.118 7.17 12.289 7.17 14.408 0l3.552-12.02L154.491 40h10.296l-7.514-31.42c-1.787-7.473-12.332-7.75-14.51-.381l-3.807 12.884L135.148 8.2c-2.177-7.368-12.723-7.092-14.51.38L113.124 40h10.296z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logoipsum311SvgIcon;
/* prettier-ignore-end */
