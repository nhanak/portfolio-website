import styled from "styled-components";

 const ProjectCardsGrid = styled.div`
    display:grid;

    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
`

export default ProjectCardsGrid;