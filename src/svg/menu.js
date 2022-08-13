import * as React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  /* background-color: red; */
  height: 40px;
  fill: #f00;
  transition: 0.3s;

  &:hover {
    fill: #f005;
  }
`

const Menu = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 61" {...props}>
    <path
      style={{
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: ".35603747px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M4.96 237.55h111.02s3.139.728 3.139 5.687c0 4.96-2.806 5.084-2.806 5.084H4.843s-3.828.163-3.857-5.106c-.03-5.269 3.974-5.666 3.974-5.666z"
      transform="translate(0 -236)"
    />
    <path
      style={{
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: ".30462244px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M4.008 253.989h81.27s3.033.633 3.033 5.592c0 4.96-2.788 5.179-2.788 5.179h-81.6s-2.803.163-2.824-5.106c-.022-5.268 2.91-5.665 2.91-5.665z"
      transform="translate(0 -236)"
    />
    <path
      style={{
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: ".24358563px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M4.23 269.906h51.964s2.606.73 2.606 5.688c0 4.96-2.45 5.084-2.45 5.084H4.175S.98 280.65.966 275.38c-.014-5.269 3.263-5.475 3.263-5.475z"
      transform="translate(0 -236)"
    />
    <path
      style={{
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: ".15988779px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M3.89 285.392h22.39s2.704.824 2.704 5.783c0 4.96-2.637 4.988-2.637 4.988H3.867s-2.51.163-2.516-5.106c-.006-5.268 2.54-5.665 2.54-5.665z"
      transform="translate(0 -236)"
    />
  </Svg>
)

export default Menu
