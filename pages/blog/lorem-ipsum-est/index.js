import React, {useContext} from "react";
import PageSectionContainer from "../../../components/PageSectionContainer/PageSectionContainer";
import P from "../../../components/P/P";
import ProjectSection from "../../../components/ProjectSection/ProjectSection";
import { ThemeContext } from "../../../components/Theme/Theme";
import BlogTitleSection from "../../../components/BlogTitleSection/BlogTitleSection";

export default function LoremIpsumEst() {
    const context = useContext(ThemeContext);
    return (
      <>
        <BlogTitleSection title="Lorem ipsum est" date="April 1st, 2021" author="Neil Hanak"/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
            <ProjectSection  paddingTop={"2rem"} paddingBottom={"1rem"}>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in orci malesuada ante tempor malesuada vel a dui. Duis vitae lacus a dui eleifend molestie ut vel turpis. Vestibulum porta, nisi quis lobortis vestibulum, odio tellus interdum mi, at accumsan ante neque ut orci. Nulla facilisi. Mauris tellus nulla, eleifend non mauris congue, mattis facilisis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at suscipit lorem.</P>
                <P>Fusce ultrices scelerisque ex, at tincidunt turpis sagittis eget. Sed pellentesque ligula vitae suscipit auctor. Vestibulum faucibus ligula arcu, in lobortis tortor pretium tristique. Pellentesque quis consequat quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sodales eget metus ac suscipit. Aliquam vel venenatis ante. Sed id dignissim diam.</P>
                <P>Ut scelerisque nisi luctus diam congue posuere. Praesent iaculis dui dolor, quis venenatis ex posuere id. In finibus lectus ligula, vel convallis ipsum pretium a. Cras fermentum non justo et sollicitudin. Suspendisse rutrum sodales elit a tristique. Nunc sagittis diam nec elit molestie ornare. Etiam at euismod eros, et egestas sem. Ut at tristique lacus. Vivamus venenatis nisi vel risus consectetur, id congue velit pulvinar. Quisque condimentum vulputate ipsum, nec ornare leo scelerisque eget. Sed euismod ullamcorper egestas. Curabitur massa nisi, molestie quis magna a, venenatis ultrices diam. Vivamus condimentum ut turpis vel lobortis. Phasellus luctus faucibus magna quis cursus. Integer porttitor lacus vel nunc elementum, eu finibus ligula aliquet. Pellentesque nec ultricies lacus, at volutpat libero.</P>
            </ProjectSection>
        </PageSectionContainer>
    </>
  )
}