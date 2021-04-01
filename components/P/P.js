import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";

export default function P(props){
    const context = useContext(ThemeContext);
    return(
        <PStyled theme={context}>{props.children}</PStyled>
    )
}

const PStyled = styled.p`
    color: ${props=>props.theme.primaryTextColor};
    font-size:1.8em
`