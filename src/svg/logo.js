
import * as React from "react";
import styled from 'styled-components';



const Svg = styled.svg`

    cursor: pointer;
    
    g {
        path {
            fill: #c93939;
            transition: .5s;
        }
    }
    &:hover {
        path {
            fill: #f00;
            filter:drop-shadow(0px 0px 5px #ff8989);
        }
    }
`;

const Logo = ({color}) => {


  return (
  <Svg
    width={372.661}
    height="31.9mm"
    viewBox="0 0 98.6 31.9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      style={{
        display: "inline",
      }}
    >
      <path

        style={{
          display: "inline",
          fill: color,
          fillOpacity: 1,

          strokeWidth: 0,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m75.757 31.163 20.826-11.917L77.851 8.47V4.906l18.695 10.818v-2.646L75.548.954v8.85l15.845 9.148-13.342 7.703v-2.688l7.867-4.542-2.695-1.556-7.715 4.454z"
      />
      <path
        style={{
          display: "inline",
          mixBlendMode: "normal",
          fill: color,
          fillOpacity: 1,
          
          strokeWidth: 0,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M47.485 26.768 27.243 6.526v5.325l15.054 15.053z"
      />
      <path
        style={{
          display: "inline",
          fill: color,
          fillOpacity: 1,
          
          strokeWidth: 0,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M36.836 26.796 27.25 17.21v5.136l4.513 4.513zM27.243 6.59H41.09s6.605 1.594 6.465 6.884c-.14 5.29-5.884 7.48-5.884 7.48l-3.758-3.758h3.037s2.799-.56 2.91-3.246c.113-2.687-2.966-3.89-2.966-3.89H30.776ZM53.596 26.939V10.7l7.239 8.617L71.29 6.68h-3.447l-6.932 8.272-6.97-8.272h-3.562v20.298z"
      />

        

      <path
        style={{
          display: "inline",
          fill: color,
          fillOpacity: 1,
          
          strokeWidth: 0,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M71.29 26.9V9.13L60.835 21.807l-5.937-6.97v4.327l5.937 6.97 7.315-8.885-.039 9.69zM22.86 1.072 2.032 12.99l18.732 10.775v3.565L2.07 16.512v2.645L23.07 31.281v-8.85L7.223 13.284 20.565 5.58v2.688L12.7 12.81l2.695 1.556 7.714-4.454z"
      />
    </g>
  </Svg>
  )
}

export default Logo
