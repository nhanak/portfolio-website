import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";

export default function H3(props){
    const context = useContext(ThemeContext);
    return(
        <H3Styled theme={context}>{props.children}</H3Styled>
    )
}

const H3Styled = styled.h3`
    color: ${props=>props.theme.primaryTextColor};
    font-size:2.5rem;
`