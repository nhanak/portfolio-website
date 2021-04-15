import React from "react";
import styled from "styled-components";

export default function LongFormTextSection(props){
    return(
        <LongFormTextSectionStyled>
            {props.children}
        </LongFormTextSectionStyled>
    )
}

const LongFormTextSectionStyled = styled.div`
    max-width:90rem;
    margin:auto;
`