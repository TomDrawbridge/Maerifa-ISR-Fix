// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AmdHeaderLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AmdHeaderLogoSvgIcon(props: AmdHeaderLogoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 139.72 33.32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M32.86 31.11h-7.79l-2.37-5.72H9.78l-2.16 5.72H0L11.64 2.23h8.34zm-16.89-22l-4.28 11.25h8.89zm44.99-6.88h6.27v28.88h-7.2v-18l-7.79 9.06h-1.1l-7.79-9.1v18h-7.2V2.23h6.27l9.27 10.74zm24.51 0c10.54 0 16 6.56 16 14.48 0 8.3-5.25 14.4-16.77 14.4H72.72V2.23zm-5.55 23.59h4.7c7.24 0 9.4-4.91 9.4-9.15 0-5-2.67-9.15-9.48-9.15h-4.62zm50.72-16.74h-14.89L106.68 0h33.04v33.05l-9.08-9.08V9.08zm-14.9 14.9V10.9l-9.34 9.34v13.09h13.08l9.34-9.35h-13.08z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AmdHeaderLogoSvgIcon;
/* prettier-ignore-end */
