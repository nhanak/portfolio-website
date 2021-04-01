import React from "react";
import styled from "styled-components";

export default function NavbarItem(props){
    return(
        <NavbarItemStyled>
            {props.children}
        </NavbarItemStyled>
    )
}

const NavbarItemStyled = styled.div`
    line-height:1.5;
    height:4.1rem;
    padding-left:6rem;
    display:flex;
    align-items:center;
    font-size:1.6rem;
`


