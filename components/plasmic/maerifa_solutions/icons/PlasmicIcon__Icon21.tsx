// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
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
          "M16.914 7.344H14.95a2.394 2.394 0 00-2.226 1.532l-1.03 2.657-3.542 2.011-2.825-.43a2.394 2.394 0 00-2.394 1.172l-.957 1.676a2.394 2.394 0 00.191 2.705l1.796 2.226v4.022L2.216 27.14a2.394 2.394 0 00-.191 2.705l.957 1.675a2.394 2.394 0 002.394 1.173l2.825-.43 3.495 2.01 1.029 2.657a2.395 2.395 0 002.226 1.532h2.01a2.395 2.395 0 002.227-1.532l1.03-2.657 3.494-2.01 2.825.43a2.395 2.395 0 002.394-1.173l.957-1.675a2.395 2.395 0 00-.191-2.705L27.9 24.915v-2.593m-16.756.582a4.788 4.788 0 109.575 0 4.788 4.788 0 00-9.575 0zM23.145 10.12c-.878-.152-.878-1.411 0-1.564a7.94 7.94 0 006.395-6.125l.053-.241c.19-.867 1.424-.873 1.622-.007l.064.281a7.98 7.98 0 006.413 6.088c.882.154.882 1.42 0 1.573a7.98 7.98 0 00-6.413 6.088l-.064.281c-.198.865-1.432.86-1.622-.007l-.053-.241a7.94 7.94 0 00-6.395-6.125z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
