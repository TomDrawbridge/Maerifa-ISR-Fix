// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaerifaInnerIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaerifaInnerIconSvgIcon(props: MaerifaInnerIconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 41.075 35.88"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M40.917 27.49l-1.21 2.11-3.29 5.69c-.21.37-.6.59-1.02.59h-8.99c-.42 0-.82-.22-1.03-.59l-3.29-5.69-1.19-2.06a.219.219 0 00-.07-.09.41.41 0 00-.58 0c-.03.02-.06.05-.08.09l-4.47 7.75c-.21.37-.6.59-1.02.59h-9c-.42 0-.81-.22-1.02-.59l-4.5-7.8c-.21-.37-.21-.82 0-1.19l4.5-7.78c.21-.35.6-.58 1.02-.58h8.94c.33 0 .53-.35.37-.64l-3.25-5.64-1.23-2.1c-.18-.32-.21-.71-.07-1.05.02-.04.05-.09.07-.14l3.3-5.69 1.2-2.08c0-.01.01-.01.01-.02.05-.09.11-.16.18-.23a1.193 1.193 0 01.84-.35h9a1.217 1.217 0 01.84.35c.07.07.13.14.18.23l1.21 2.1 3.37 5.83c.14.34.11.73-.07 1.05l-1.23 2.1-3.25 5.64c-.16.29.04.64.37.64h8.94c.42 0 .81.23 1.02.58l4.5 7.79c.21.37.21.82 0 1.18z"
        }
        fill={"currentColor"}
        data-name={"Layer_1"}
      ></path>
    </svg>
  );
}

export default MaerifaInnerIconSvgIcon;
/* prettier-ignore-end */
