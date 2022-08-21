import * as React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  cursor: pointer;

  g {
    path {
      fill: #c93939;
      transition: 0.5s;
    }
  }
  &:hover {
    path {
      fill: #f00;
      filter: drop-shadow(0px 0px 5px #ff8989);
    }
  }
`

const Logo = ({ color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="122mm"
      height="44mm"
      viewBox="0 0 122 44"
    >
      <g
        style={{
          display: "inline",
          opacity: 1,
        }}
      >
        <path
          style={{
            display: "inline",
            fill: "#c93939",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.42333299,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m106.436 34.166 21.597-12.358-19.426-11.174V6.937l19.387 11.218v-2.744L106.22 2.84v9.177l16.432 9.487-13.836 7.988v-2.787l8.158-4.71-2.795-1.614-8 4.619z"
          transform="translate(-6.577 6.45)"
        />
        <path
          style={{
            display: "inline",
            mixBlendMode: "normal",
            fill: "#c93939",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.37149799,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M52.841 30.768 31.851 9.777v5.522l15.61 15.61Z"
          transform="translate(-6.577 6.45)"
        />
        <path
          style={{
            display: "inline",
            fill: "#c93939",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.37149799,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m41.798 30.797-9.94-9.94v5.325l4.68 4.68zM31.85 9.842h14.36s6.849 1.655 6.704 7.14c-.145 5.485-6.102 7.757-6.102 7.757l-3.897-3.897h3.15s2.902-.58 3.018-3.367c.116-2.786-3.077-4.034-3.077-4.034H35.514ZM59.179 30.945v-16.84l7.506 8.937L77.528 9.935h-3.575l-7.188 8.579-7.229-8.579h-3.693v21.05Z"
          transform="translate(-6.577 6.45)"
        />
        <path
          style={{
            display: "inline",
            fill: "#c93939",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.37149799,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M77.528 30.905V12.477L66.685 25.623l-6.156-7.228v4.488l6.156 7.228 7.586-9.214-.04 10.048z"
          transform="translate(-6.577 6.45)"
        />
        <path
          style={{
            display: "inline",
            fill: "#c93939",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.42333299,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M29.232 3.677 7.634 16.035 27.06 27.209v3.696L7.673 19.687v2.744l21.775 12.572v-9.176L13.016 16.34l13.836-7.988v2.787l-8.157 4.71 2.794 1.613 8-4.618z"
          transform="translate(-6.577 6.45)"
        />
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          style={{
            display: "inline",
            fill: "#932727",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.42333299,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M96.408 201.238H87.05l-24.354 42.183h2.915l22.897-39.66h3.477l-22.854 39.586h2.836z"
          transform="translate(6.142 -200.186)"
        />
      </g>
    </Svg>
  )
}

export default Logo
