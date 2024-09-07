// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logoipsum317SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logoipsum317SvgIcon(props: Logoipsum317SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 176 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M15 28a5 5 0 01-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15zm30-18a9 9 0 100 18 9 9 0 000-18zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19zm127-9a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19zM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 00132 20.261V19c0-10.493-8.507-19-19-19H85zm37 19a9 9 0 00-9-9H85a9 9 0 100 18h28a9 9 0 009-8.93V19z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        d={"M176 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"}
      ></path>
    </svg>
  );
}

export default Logoipsum317SvgIcon;
/* prettier-ignore-end */
