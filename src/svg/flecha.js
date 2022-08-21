import * as React from "react"

import styled from "styled-components"

const Svg = styled.svg`
  /* background-color: red; */
  height: 100%;
  width: 100%;
  position: relative;
  left: 7px;
`

const Flecha = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="61mm"
    height="70mm"
    viewBox="0 0 61 70"
    {...props}
  >
    <defs>
      <marker
        orient="auto"
        refY={0}
        refX={0}
        id="a"
        style={{
          overflow: "visible",
        }}
      >
        <path
          d="m5.77 0-8.65 5V-5Z"
          style={{
            fill: "#000",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "1.00000003pt",
            strokeOpacity: 1,
          }}
          transform="scale(-.8)"
        />
      </marker>
    </defs>
    <path
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 6.76499987,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        markerStart: "url(#a)",
      }}
      d="m20.79 262.558-18.742.09"
      transform="translate(0 -227)"
    />
  </Svg>
)

export default Flecha
