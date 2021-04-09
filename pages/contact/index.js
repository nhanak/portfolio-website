import React, {useContext} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import { ThemeContext } from "../../components/Theme/Theme";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import FlatButton from "../../components/FlatButton/FlatButton";
import H1 from "../../components/H1/H1";
import H3 from "../../components/H3/H3";
import P from "../../components/P/P";
import styled from "styled-components";
import Link_ from "../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";

export default function Contact() {
    const context = useContext(ThemeContext);
    return (
      <>
    <NoTitle/>
    <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
        <ProjectSection paddingTop={"2rem"} paddingBottom={"1rem"}>
            <FormWrapper>
                <FormStyled>
                    <FormTitleStyled>
                        <H1>Want to talk?</H1>
                        <P>You can reach me at <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor}>neilhanak@info.com</Link_></P>
                        <P>... or fill out the form below 😎</P>
                    </FormTitleStyled>
                    <FormItemStyled>
                        <FormLabel theme={context} for="email">Email<RedSpan>*</RedSpan></FormLabel>
                        <InputStyled theme={context} type="email" id="email" name="email" maxlength="64"/>
                    </FormItemStyled>
                    <FormItemStyled>
                        <FormLabel theme={context} for="name">Name<RedSpan>*</RedSpan></FormLabel>
                        <InputStyled theme={context} type="text" id="name" name="name" maxlength="64"/>
                    </FormItemStyled>
                    <FormItemStyled>
                        <FormLabel theme={context} for="message">Message<RedSpan>*</RedSpan></FormLabel>
                        <TextAreaStyled theme={context} rows="10" cols="30"  id="message" name="message"/>
                    </FormItemStyled>
                   
                </FormStyled>
                <FlatButton theme={context}>Submit</FlatButton>
            </FormWrapper>
        </ProjectSection>
    </PageSectionContainer>     
    </>
  )
}
const NoTitle = styled.div`
    height:0rem;
    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        height:5rem;
     }
`
const FormWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const FormTitleStyled = styled.div`
    text-align:center;
`;

const FormItemStyled = styled.div`
    margin-top:1rem;
    margin-bottom:1rem;
    display:flex;
    flex-direction:column;
`

const InputStyled = styled.input`
    background:${props=>props.theme.tertiaryBackgroundColor};
    border:1px solid ${props=>props.theme.tertiaryBackgroundColor};
    font-size:2rem;
    color:${props=>props.theme.primaryTextColor};
    :focus{
        border:1px solid ${props=>props.theme.primaryAccentColor};
    }
    padding-top:0.5rem;
    padding-bottom:0.5rem;
`

const TextAreaStyled = styled.textarea`
    resize:none;
    background:${props=>props.theme.tertiaryBackgroundColor};
    border:1px solid ${props=>props.theme.tertiaryBackgroundColor};
    font-size:2rem;
    color:${props=>props.theme.primaryTextColor};
    :focus{
        border:1px solid ${props=>props.theme.primaryAccentColor};
    }
`

const FormStyled = styled.form`
    display:flex;
    flex-direction:column;
    width:95%;
    min-width:20rem;
    margin-bottom:3rem;
    @media (min-width: 768px) { 
        width:70%;

     }
     @media (min-width: 992px) { 
        width:50%;
     }
`

const FormLabel = styled.label`
    color:${props=>props.theme.primaryTextColor};
    font-size:1.6rem;
    padding-bottom:1rem;
    font-weight:bold;
`;

const RedSpan = styled.span`
    color:red;
`