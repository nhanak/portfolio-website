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
    padding-left:6rem;
    display:flex;
    align-items:center;
`


