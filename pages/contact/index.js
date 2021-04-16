import React, {useContext, useState, useRef} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import { ThemeContext } from "../../components/Theme/Theme";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import FlatButton from "../../components/FlatButton/FlatButton";
import H1 from "../../components/H1/H1";
import P from "../../components/P/P";
import styled from "styled-components";
import Link_ from "../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import Head from "../../components/Head/Head";
import ReCAPTCHA from "react-google-recaptcha";
const axios = require('axios');


export default function Contact(props) {
    const recaptchaRef = useRef(null);
    const context = useContext(ThemeContext);
    const {isDarkMode} = props;
    // Form values
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
    const [captchaCompleted, setCaptchaCompleted] = useState(false);

    // Form error values
    const [nameError, setNameError] = useState(false);
    const [emailAddressError, setEmailAddressError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    // Form submission response values
    const [numFormSubmissions, setNumFormSubmissions] = useState(0);
    const [formAccepted, setFormAccepted] = useState(false);
    const [formRejected, setFormRejected] = useState(false);

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleEmailAddressChange(event){
        setEmailAddress(event.target.value);
    }

    function handleMessageChange(event){
        setMessage(event.target.value);
    }

    function captchaCompletedAction(value){
        setCaptchaCompleted(true);
    }

    function validateForm(){
        // Validate email field
        setEmailAddressError(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)));

        // Validate name field
        setNameError(name.length < 1);

        // Validate message field
        setMessageError(message.length < 1);

        // Return true if there are no errors in any of the fields
        return (!nameError && !messageError && !emailAddressError && captchaCompleted);
    }

    function handleSubmit(event){
        event.preventDefault();
        setNumFormSubmissions(numFormSubmissions+1);
        const validForm = validateForm();
        if (validForm){
            axios.post('/api/email', {
                name: name,
                emailAddress: emailAddress, 
                message:message,
            })
            .then((response)=>{
                // Server was able to send the email
                console.log(response);
                setFormRejected(false);
                setFormAccepted(true);
            })
            .catch((error)=>{
                // Server failed sending the email
                setFormRejected(true);
                setFormAccepted(false);
            });
        }
    }
    return (
        <>
            <Head title="Contact - Neil Hanak"/>
            <NoTitle/>
            <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
                <ProjectSection paddingTop={"2rem"} paddingBottom={"1rem"}>
                    {!formAccepted && 
                        <FormWrapper>
                            <FormStyled>
                                <FormTitleStyled>
                                    <H1>Want to talk?</H1>
                                    <P>You can reach me at <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="mailto:nhanak.contact@gmail.com">nhanak.contact@gmail.com</Link_></P>
                                    <P>... or fill out the form below 😎</P>
                                </FormTitleStyled>
                                <FormItemStyled>
                                    <FormLabel theme={context} for="email">Email<RedSpan>*</RedSpan></FormLabel>
                                    <InputStyled theme={context} type="email" id="email" name="email" maxlength="64" onChange={handleEmailAddressChange} value={emailAddress}/>
                                    {emailAddressError && <PErr>Please fill out the email field with a valid email address</PErr>}
                                </FormItemStyled>
                                <FormItemStyled>
                                    <FormLabel theme={context} for="name">Name<RedSpan>*</RedSpan></FormLabel>
                                    <InputStyled theme={context} type="text" id="name" name="name" maxlength="64" onChange={handleNameChange} value={name}/>
                                    {nameError && <PErr>Please fill out the name field</PErr>}
                                </FormItemStyled>
                                <FormItemStyled>
                                    <FormLabel theme={context} for="message">Message<RedSpan>*</RedSpan></FormLabel>
                                    <TextAreaStyled theme={context} rows="10" cols="30"  id="message" name="message"  onChange={handleMessageChange} value={message}/>
                                    {messageError && <PErr>Please fill out the message field</PErr>}
                                </FormItemStyled>
                                <FormItemStyled>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LcQ96waAAAAAKbP_c0n15Cir47s5tel2m7gBzSq"
                                        onChange={captchaCompletedAction}
                                        theme={isDarkMode ? "dark":"light"}
                                        />
                                    {(!captchaCompleted && (numFormSubmissions>0)) && <PErr>Please complete the ReCAPTCHA</PErr>}
                                    </FormItemStyled>
                            </FormStyled>
                            <FlatButton onClick={handleSubmit} theme={context}>Submit</FlatButton>
                            {formRejected && <PErr>Server failed to send message. Please email nhanak.contact@gmail.com directly or try again later</PErr>}
                        </FormWrapper>
                    }
                    {formAccepted &&
                        <FormWrapper>
                            <SuccessWrapper>
                                <H1>Your message has been sent, talk to you soon!</H1>
                            </SuccessWrapper>
                        </FormWrapper> 
                    }
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
const SuccessWrapper = styled.div`
    text-align:center;
`;
const FormWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    min-height:50vh;
`

const PErr = styled.p`
 font-size:1.4rem;
 color:red;
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

const FormStyled = styled.div`
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