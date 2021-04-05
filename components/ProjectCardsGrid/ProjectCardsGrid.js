import styled from "styled-components";

 const ProjectCardsGrid = styled.div`
    display:grid;
    grid-gap: 50px;
    grid-auto-rows:1fr;


    @media (min-width: 768px) { 
        grid-template-columns: repeat(2, 1fr);
    }

`

export default ProjectCardsGrid;