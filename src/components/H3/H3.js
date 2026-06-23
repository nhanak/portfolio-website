import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";

export default function H3(props){
    const {centered} = props;
    const context = useContext(ThemeContext);
    return(
        <H3Styled centered={centered} theme={context}>{props.children}</H3Styled>
    )
}

const H3Styled = styled.h3`
    color: ${props=>props.theme.primaryTextColor};
    font-size:3rem;
    line-height:6rem;

    ${props=>props.centered && `text-align:center;`}
    @media (min-width: 768px) { 
        
     }
`