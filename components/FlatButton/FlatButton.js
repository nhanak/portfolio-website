import React, {useContext} from "react";
import styled from "styled-components";
import {ThemeContext} from "../Theme/Theme";
export default function FlatButton(props){
    const context = useContext(ThemeContext)
    return(
        <FlatButtonStyled href={props.href} theme={context}>{props.children}</FlatButtonStyled>
    )
}


const FlatButtonStyled = styled.a`
    border: 1px solid ${props=> props.theme.primaryAccentColor};
    border-radius:1.8rem;
    color:${props=> props.theme.primaryAccentColor};
    background-color:rgba(0,0,0,0);
    font-size:1.6rem;
    padding-left:3.5rem;
    padding-right:3.5rem;
    padding-top:0.75rem;
    padding-bottom:0.75rem;

    :hover{
        color:${props=> props.theme.primaryBackgroundColor};
        background-color:${props=> props.theme.primaryAccentColor};
    }
`