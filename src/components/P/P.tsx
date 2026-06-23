import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";

export default function P(props){
    const context = useContext(ThemeContext);
    const {paddingLeft} = props;
    return(
        <PStyled paddingLeft={paddingLeft} theme={context}>{props.children}</PStyled>
    )
}

const PStyled = styled.p`
    color: ${props=>props.theme.primaryTextColor};
    font-size:2rem;
    line-height:3.5rem;
    ${props=>props.paddingLeft&&`padding-left:${props.paddingLeft}`};
`