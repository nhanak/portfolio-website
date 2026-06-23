import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../theme/Theme";

export default function H2(props){
    const context = useContext(ThemeContext);
    return(
        <H2Styled theme={context}>{props.children}</H2Styled>
    )
}

const H2Styled = styled.h2`
    color: ${props=>props.theme.primaryTextColor};
    font-size:3.5rem;
`