// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NvidiaLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NvidiaLogoSvgIcon(props: NvidiaLogoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      version={"1.1"}
      viewBox={"0 0 731.4 136.7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M446.9 25.5v91.2h25.7V25.5h-25.7zm-202.5-.2v91.3h26V45.7h20.2c6.6 0 11.3 1.7 14.5 5.1 4.1 4.3 5.7 11.4 5.7 24.1v41.7H336V66.2c0-36-23-40.9-45.4-40.9h-46.2zm244 .2v91.2h41.7c22.3 0 29.5-3.7 37.3-12 5.6-5.8 9.1-18.6 9.1-32.6s-3-24.3-8.3-31.4c-9.4-12.8-23.2-15.2-43.7-15.2h-36.1zm25.5 19.7H525c16.1 0 26.4 7.2 26.4 25.9s-10.4 26-26.4 26h-11.1V45.2zM409.8 25.5l-21.5 72.3-20.6-72.3h-27.8l29.4 91.2h37.1l29.7-91.2h-26.3zm178.8 91.2h25.7V25.5h-25.7v91.2zm72.2-91.2l-35.9 91.1h25.3l5.7-16.2h42.5l5.4 16.1h27.6l-36.2-91h-34.4zm16.7 16.6l15.6 42.7h-31.7l16.1-42.7zM78.3 40.6V28.1c1.2 0 2.5-.2 3.7-.2 34.3-1.1 56.8 29.5 56.8 29.5s-24.3 33.7-50.3 33.7-6.9-.5-10.1-1.6v-38c13.4 1.6 16.1 7.5 24 20.9l17.9-15s-13.1-17.1-35-17.1c-2.3 0-4.6 0-7 .3m0-41.4v18.7l3.7-.2c47.7-1.6 78.8 39.1 78.8 39.1s-35.7 43.4-72.9 43.4-6.4-.3-9.6-.9v11.6c2.6.3 5.3.5 8 .5 34.6 0 59.7-17.7 83.9-38.6 4 3.2 20.5 11.1 23.9 14.5-23 19.3-76.7 34.9-107.2 34.9s-5.7-.2-8.5-.5V138h131.5V-.8H78.3zm0 90.3v9.9c-32-5.7-40.9-39-40.9-39s15.4-17 40.9-19.8v10.8c-13.4-1.6-23.9 10.9-23.9 10.9s6 21.1 24 27.2M21.5 59s18.9-28 56.9-30.9V17.9C36.3 21.3 0 56.8 0 56.8s20.6 59.6 78.3 65V111c-42.4-5.3-56.8-51.9-56.8-51.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NvidiaLogoSvgIcon;
/* prettier-ignore-end */
