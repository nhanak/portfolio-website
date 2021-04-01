import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";


export default function ProjectCard(props){
    const context = useContext(ThemeContext);
    return(
        <ProjectCardStyled>
            <a href="">
                <ProjectCardImg src={props.src}/>
            </a>
            <ProjectCardTitleTextStyled href="" theme={context}>{props.title}</ProjectCardTitleTextStyled>
            <ProjectCardTagTextStyled href="" theme={context}>{props.tags}</ProjectCardTagTextStyled>
        </ProjectCardStyled>
    )
}


const ProjectCardStyled = styled.div`

`

const ProjectCardImg = styled.img`
    width:95%;
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