import React from "react";
import styled from "styled-components";


const LinkWithUnderlineAnimation = React.forwardRef((props, ref) => {
    return (
        <LinkWithUnderlineAnimationStyled 
            href={props.href}
            onClick={props.onClick}
            ref={ref}
            fontSize={props.fontSize}
            initialColor={props.initialColor} 
            hoverColor={props.hoverColor}
            marginTop={props.marginTop}
            marginBottom={props.marginBottom}>
                {props.children}
            </LinkWithUnderlineAnimationStyled>
    )
  });


const LinkWithUnderlineAnimationStyled = styled.a`
    margin:0px;
    ${props=>props.marginTop && `margin-top:${props.marginTop};`}
    ${props=>props.marginBottom && `margin-bottom:${props.marginBottom};`}
    font-size:${props=>props.fontSize};
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size .3s;
    color:${props=>props.initialColor};
    :hover{
        background-size: 100% 1px;
        color:${props=>props.hoverColor};
    }
`
export default LinkWithUnderlineAnimation;