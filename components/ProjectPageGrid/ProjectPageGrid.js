import React from "react";
import styled from "styled-components";

const ProjectPageGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-gap:4rem;
    grid-template-areas:
        "descriptionArea"
        "mediaArea";
    @media (min-width: 768px) {
        grid-gap:0px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "mediaArea descriptionArea";
     }
`

export default ProjectPageGrid;