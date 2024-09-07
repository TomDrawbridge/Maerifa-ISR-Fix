// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AiSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AiSvgrepoComSvgIcon(props: AiSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 490 490"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M416 0H74C33.3 0 0 33.4 0 74v342c0 40.7 33.4 74 74 74h342c40.7 0 74-33.4 74-74V74c0-40.6-33.4-74-74-74zm33.3 416c0 18.8-14.6 33.4-33.4 33.4H74c-18.8 0-33.4-14.6-33.4-33.4V74c0-18.8 14.6-33.4 33.4-33.4h342c18.8 0 33.4 14.6 33.4 33.4v342h-.1z"
        }
      ></path>

      <path
        d={
          "M234.8 169.8c-2.4-5.5-7.8-9-13.8-9s-11.4 3.5-13.8 9L147 308.3c-3.3 7.6.2 16.4 7.8 19.7 2 .9 4 1.3 6 1.3 5.8 0 11.3-3.4 13.8-9l13.2-30.2h66.9l13.2 30.2c3.3 7.6 12.1 11.1 19.7 7.8s11.1-12.2 7.8-19.7l-60.6-138.6zM200.7 260l20.4-46.8 20.4 46.8h-40.8zm128.6-42.1c-8.3 0-15 6.7-15 15v81.4c0 8.3 6.7 15 15 15s15-6.7 15-15v-81.4c0-8.3-6.7-15-15-15zm0-51.5c-8.3 0-15 6.7-15 15v4c0 8.3 6.7 15 15 15s15-6.7 15-15v-4c0-8.3-6.7-15-15-15z"
        }
      ></path>
    </svg>
  );
}

export default AiSvgrepoComSvgIcon;
/* prettier-ignore-end */
