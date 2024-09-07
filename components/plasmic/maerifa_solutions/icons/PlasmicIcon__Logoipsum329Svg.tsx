// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logoipsum329SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logoipsum329SvgIcon(props: Logoipsum329SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 41"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M54 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M13.75 40.794C6.156 40.794 0 34.638 0 27.044V1h5v26.044a8.75 8.75 0 008.75 8.75c4.893 0 8.75-3.771 8.75-8.544h5v7.5a1.25 1.25 0 002.5 0v-8.875a6.25 6.25 0 01-7.5-6.125V7.25a6.25 6.25 0 1112.5 0v27.5a1.25 1.25 0 102.5 0V7.25a6.25 6.25 0 1112.5 0v27.5a6.25 6.25 0 01-10 5A6.222 6.222 0 0136.25 41a6.222 6.222 0 01-3.75-1.25 6.251 6.251 0 01-9.466-2.47c-2.456 2.197-5.723 3.514-9.284 3.514zm30-4.794c-.69 0-1.25-.56-1.25-1.25V7.25a1.25 1.25 0 112.5 0v27.5c0 .69-.56 1.25-1.25 1.25zM30 19.75a1.25 1.25 0 01-2.5 0V7.25a1.25 1.25 0 112.5 0v12.5z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M7.5 27.25a6.25 6.25 0 1012.5 0v-20a6.25 6.25 0 10-12.5 0v20zm6.25 1.25c-.69 0-1.25-.56-1.25-1.25v-20a1.25 1.25 0 112.5 0v20c0 .69-.56 1.25-1.25 1.25z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Logoipsum329SvgIcon;
/* prettier-ignore-end */
