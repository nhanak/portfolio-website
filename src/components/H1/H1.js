// import React, { useContext } from "react";
// import styled from "styled-components";
// import { ThemeContext } from "../Theme/Theme";

export default function H1(props) {
  //const context = useContext(ThemeContext);
  return <h1>{props.children}</h1>;
}

// const H1Styled = styled.h1`
//     color: ${props=>props.theme.primaryTextColor};
//     font-size:4.0rem;
//     @media (min-width: 576px) {
//         font-size:4.8rem;
//      }
// `
