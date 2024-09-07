// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Svgexport11SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Svgexport11SvgIcon(props: Svgexport11SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      focusable={"false"}
      role={"img"}
      viewBox={"0 0 32 38"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <symbol
          id={"Zmk_-VCC7PrWa"}
          viewBox={"0 0 32 38"}
          fill={"currentColor"}
          preserveAspectRatio={"xMidYMid meet"}
        >
          <path
            d={
              "M7.6 25.1H0v-7.6h7.6v7.6zM0 0v12.9h2.3v-.4c0-6.1 3.4-9.9 9.9-9.9h.4V30c0 3.8-1.5 5.3-5.3 5.3H6.1V38h19.8v-2.7h-1.1c-3.8 0-5.3-1.5-5.3-5.3V2.7h.4c6.5 0 9.9 3.8 9.9 9.9v.4h2.3V0H0zm24.3 25.1h7.6v-7.6h-7.6v7.6z"
            }
          ></path>
        </symbol>
      </defs>

      <use href={"#Zmk_-VCC7PrWa"}></use>
    </svg>
  );
}

export default Svgexport11SvgIcon;
/* prettier-ignore-end */
