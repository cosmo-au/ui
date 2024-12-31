import type { JSX } from "react";

import { ILogo } from "../../types";

import { LogoStyled } from "./styles";

export const colors = ["#583749", "#3170B7", "#EE363D", "#A9C3CA", "#295F9C", "#AE282E", "#FFFFFF"];

export default function Logo({
  height = 70,
  width = 231,
  css,
  inline,
  ...rest
}: ILogo): JSX.Element {
  return (
    <LogoStyled
      css={{
        ...(inline && {
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),
        ...css,
      }}>
      <svg height={height} viewBox="0 0 463.7 141.4" width={width} {...rest}>
        <g fill="currentColor">
          <path d="m182.9 105.9c-10.5 0-18.7-3.1-24.5-9.3s-8.7-14.6-8.7-25.2v-.8c0-10.1 3.1-18.4 9.4-24.9 6.2-6.5 14.1-9.7 23.6-9.7 8.1 0 14.8 2 20.1 6.1 5.3 4 8.3 9.9 9.1 17.7h-12.8c-1.5-9.1-6.9-13.7-16.2-13.7-6 0-10.8 2.2-14.4 6.6s-5.4 10.4-5.4 17.9v.8c0 7.7 1.7 13.6 5.2 17.9s8.4 6.4 14.6 6.4c4.8 0 8.7-1.2 11.8-3.7 3.1-2.4 4.9-6 5.6-10.7h12.3c-1 8-4.1 14.1-9.4 18.3-5.2 4.2-12 6.3-20.3 6.3z" />
          <path d="m263.1 98.9c-4.8 4.7-10.9 7-18.3 7s-13.5-2.3-18.3-7-7.2-10.8-7.2-18.2v-.8c0-7.6 2.4-13.8 7.2-18.5s10.9-7.1 18.3-7.1c7.3 0 13.4 2.3 18.2 7s7.2 10.8 7.2 18.3v.8c.1 7.6-2.3 13.8-7.1 18.5zm-18.2-1.9c4.2 0 7.6-1.5 10-4.4s3.7-7 3.7-12.1v-.7c0-5.1-1.2-9.2-3.7-12.1s-5.8-4.4-10-4.4c-4.3 0-7.7 1.5-10.1 4.4s-3.7 6.9-3.7 12.1v.8c0 5.1 1.2 9.2 3.7 12.1 2.4 2.8 5.8 4.3 10.1 4.3z" />
          <path d="m297.7 105.9c-6.4 0-11.4-1.4-15-4.3-3.6-2.8-5.5-6.9-5.8-12.2h10.8c.3 2.7 1.2 4.7 2.8 6 1.5 1.3 3.9 2 7.1 2 6 0 8.9-2.1 8.9-6.4 0-2-.8-3.4-2.4-4.4s-4.4-1.8-8.2-2.4c-6.7-1.1-11.3-2.7-14-4.9s-4-5.6-4-10.2c0-4.7 1.8-8.3 5.5-11 3.7-2.6 8-3.9 13.1-3.9 11.9 0 18.4 5 19.5 15h-10.6c-.5-2.3-1.4-4-2.8-5-1.4-1.1-3.4-1.6-6-1.6-2.5 0-4.4.5-5.8 1.6s-2.1 2.5-2.1 4.3.7 3.1 2.2 4 4.1 1.7 8.1 2.4c6.5 1 11.2 2.6 14.2 4.7s4.5 5.6 4.5 10.5c0 5.1-1.7 9-5.2 11.7-3.6 2.7-8.5 4.1-14.8 4.1z" />
          <path d="m327.6 104.9v-49.6h11.5v7.6c1.3-2.5 3.2-4.5 5.9-6.2 2.7-1.6 5.7-2.5 9.2-2.5 7 0 11.6 3 14.1 8.9 1.8-2.9 4.3-5.1 7.3-6.7 3-1.5 6.2-2.3 9.5-2.3 4.9 0 8.8 1.6 11.9 4.8s4.6 8 4.6 14.5v31.4h-11.5v-30.5c0-7-2.9-10.4-8.8-10.4-3 0-5.6 1-7.7 3s-3.2 4.8-3.2 8.4v29.7h-11.5v-30.7c0-7-2.9-10.4-8.8-10.4-3 0-5.6 1-7.7 3s-3.2 4.8-3.2 8.4v29.7z" />
          <path d="m455.2 98.9c-4.8 4.7-10.9 7-18.3 7s-13.5-2.3-18.3-7-7.2-10.8-7.2-18.2v-.8c0-7.6 2.4-13.8 7.2-18.5s10.9-7.1 18.3-7.1c7.3 0 13.4 2.3 18.2 7s7.2 10.8 7.2 18.3v.8c.1 7.6-2.3 13.8-7.1 18.5zm-18.2-1.9c4.2 0 7.6-1.5 10-4.4s3.7-7 3.7-12.1v-.7c0-5.1-1.2-9.2-3.7-12.1-2.4-2.9-5.8-4.4-10-4.4-4.3 0-7.7 1.5-10.1 4.4s-3.7 6.9-3.7 12.1v.8c0 5.1 1.2 9.2 3.7 12.1s5.8 4.3 10.1 4.3z" />
        </g>
        <path
          d="m44.4 96.3c-7.5-10.3-13.3-22.9-16.1-35.8-7.3 6.4-14.7 16.2-18.4 27.2 7.2 5.7 21 7.9 34.5 8.6z"
          fill={colors[0]}
        />
        <path
          d="m44.4 96.3c-13.5-.7-27.3-2.9-34.6-8.6-2.9 8.4-3.7 17.5-.9 26.5 6.5 20.7 28.6 28.7 44.7 25.9 15.3-2.6 21.9-10.1 25.7-18.3-12.8-2.5-25.3-12.2-34.9-25.5z"
          fill={colors[1]}
        />
        <path
          d="m28.3 60.4c5.4-4.7 8.1-7.2 11.1-9.8 1.4-1.2 3-2.5 4.7-3.8 3.6-2.8 8.6-6.5 17.2-12.8 9.8-6.6 24.7-10 38.4-6.8-1.7-29-35.5-31.8-52.3-19.7-16.8 12.2-11.6 28.9-19.1 39.3-3.7 5.2-14.3 6.1-21.1 12.5-6.9 6.6-9.8 18.7 2.6 28.4 3.8-11.1 11.1-20.9 18.5-27.3z"
          fill={colors[2]}
        />
        <path
          d="m131 61.5c-4.3-20.7-17.1-31-31.3-34.3.7 10.8-1.7 22.9-4.9 34 8.7 9.6 13.2 18.4 9.1 25.6-4.3 7.5-11.1 6.4-15.4 11.9-4.4 5.7-5.5 14.8-9.4 23.1 2.1.4 4.2.6 6.3.6 25.2 0 54.1-20.1 45.6-60.9z"
          fill={colors[3]}
        />
        <path
          d="m104 86.8c4.1-7.2-.4-16-9.1-25.6-5.4 18.6-13.3 34-13.3 34s-18.4 2.1-37.2 1.1c9.6 13.2 22.1 23 34.9 25.4 3.9-8.3 5-17.4 9.4-23.1 4.2-5.5 11.1-4.3 15.3-11.8z"
          fill={colors[4]}
        />
        <path
          d="m61.3 34.1c19.5 12.5 23.2 15.9 32.6 26 .3.4.7.7 1 1.1 3.2-11 5.5-23.2 4.9-34-13.8-3.2-28.7.2-38.5 6.9z"
          fill={colors[5]}
        />
        <path
          d="m61.3 34.1c-8.7 6.3-13.7 10-17.2 12.8-1.7 1.3-3.2 2.6-4.7 3.8-3 2.5-5.7 5-11.1 9.8 2.8 12.9 8.6 25.5 16.2 35.9 18.8.9 37.2-1.1 37.2-1.1s7.9-15.4 13.3-34c-.3-.4-.7-.7-1-1.1-9.5-10.2-13.2-13.6-32.7-26.1z"
          fill={colors[6]}
        />
      </svg>
    </LogoStyled>
  );
}
