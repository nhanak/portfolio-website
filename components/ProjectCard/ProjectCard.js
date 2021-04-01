import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";


export default function ProjectCard(props){
    const context = useContext(ThemeContext);
    return(
        <ProjectCardStyled>
            <ProjectCardImageWrapper>
                <a href="">
                    <ProjectCardOverlay/>
                    <ProjectCardImg src={props.src}/>
                </a>
            </ProjectCardImageWrapper>
            <ProjectCardTitleTextStyled href="" theme={context}>{props.title}</ProjectCardTitleTextStyled>
            <ProjectCardTagTextStyled href="" theme={context}>{props.tags}</ProjectCardTagTextStyled>
        </ProjectCardStyled>
    )
}


const ProjectCardStyled = styled.div`

`

const ProjectCardImageWrapper = styled.div`
    position:relative;
`

const ProjectCardOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: white;
    :hover{
        opacity:0.2;
    }
`

const ProjectCardImg = styled.img`
    width:100%;
    max-height:300px;
    object-fit:cover;
    border-radius:10px;
`

const ProjectCardTitleTextStyled = styled.a`
    color:${props=>props.theme.primaryTextColor};
    font-size:1.6rem;
    margin-top:0.6rem;
    margin-bottom:0px;
    display:block;
    width:100%;
`

const ProjectCardTagTextStyled = styled.a`
    color:${props=>props.theme.secondaryTextColor};
    font-size:1.6rem;
    margin-top:0.6rem;
    display:block;
    margin-bottom:0.6rem;

`