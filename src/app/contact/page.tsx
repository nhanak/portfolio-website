"use client";

import { useContext, useState, useRef } from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import { ThemeContext } from "../../components/Theme/Theme";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import FlatButton from "../../components/flatButton/FlatButton";
import H1 from "../../components/H1/H1";
import P from "../../components/P/P";
import styled from "styled-components";
import Link_ from "../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import Head from "../../components/head/Head";
import ReCAPTCHA from "react-google-recaptcha";
const axios = require("axios");

export default function Contact(props) {
  const recaptchaRef = useRef(null);
  const context = useContext(ThemeContext);
  const { isDarkMode } = props;
  // Form values
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  // Form error values
  const [nameError, setNameError] = useState(true);
  const [emailAddressError, setEmailAddressError] = useState(true);
  const [messageError, setMessageError] = useState(true);

  // Form submission response values
  const [numFormSubmissions, setNumFormSubmissions] = useState(0);
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const [formAccepted, setFormAccepted] = useState(false);
  const [formRejected, setFormRejected] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailAddressChange(event) {
    setEmailAddress(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function captchaCompletedAction(value) {
    setCaptchaCompleted(true);
  }

  function validateForm() {
    // Validate email field
    setEmailAddressError(
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress),
    );

    // Validate name field
    setNameError(name.length < 1);

    // Validate message field
    setMessageError(message.length < 1);

    // Return true if there are no errors in any of the fields
    return (
      !nameError && !messageError && !emailAddressError && captchaCompleted
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsSubmitting) {
      setFormIsSubmitting(true);
      setNumFormSubmissions(numFormSubmissions + 1);
      const validForm = validateForm();
      if (validForm) {
        axios
          .post("/api/email", {
            name: name,
            emailAddress: emailAddress,
            message: message,
          })
          .then((response) => {
            // Server was able to send the email
            setFormRejected(false);
            setFormAccepted(true);
            setFormIsSubmitting(false);
          })
          .catch((error) => {
            // Server failed sending the email
            setFormRejected(true);
            setFormAccepted(false);
            setFormIsSubmitting(false);
          });
      } else {
        setFormIsSubmitting(false);
      }
    }
  }
  return (
    <>
      <Head title="Contact - Neil Hanak" />
      <NoTitle />
      <PageSectionContainer>
        <ProjectSection className="pt-20 pb-1">
          {!formAccepted && (
            <FormWrapper>
              <FormStyled>
                <FormTitleStyled>
                  <H1>Want to talk?</H1>
                  <P>
                    You can reach me at{" "}
                    <Link_
                      initialAccent={true}
                      className="text-lg"
                      href="mailto:nhanak.contact@gmail.com"
                    >
                      nhanak.contact@gmail.com
                    </Link_>
                  </P>
                  <P>... or fill out the form below 😎</P>
                </FormTitleStyled>
                <FormItemStyled>
                  <NewFormLabel htmlFor="email">
                    Email<RedSpan>*</RedSpan>
                  </NewFormLabel>
                  <NewInputStyled
                    type="email"
                    id="email"
                    name="email"
                    maxLength={64}
                    onChange={handleEmailAddressChange}
                    value={emailAddress}
                  />
                  {emailAddressError && numFormSubmissions > 0 && (
                    <NewPErr>
                      Please fill out the email field with a valid email address
                    </NewPErr>
                  )}
                </FormItemStyled>
                <FormItemStyled>
                  <NewFormLabel htmlFor="name">
                    Name<RedSpan>*</RedSpan>
                  </NewFormLabel>
                  <NewInputStyled
                    type="text"
                    id="name"
                    name="name"
                    maxLength={64}
                    onChange={handleNameChange}
                    value={name}
                  />
                  {nameError && numFormSubmissions > 0 && (
                    <NewPErr>Please fill out the name field</NewPErr>
                  )}
                </FormItemStyled>
                <FormItemStyled>
                  <NewFormLabel htmlFor="message">
                    Message<RedSpan>*</RedSpan>
                  </NewFormLabel>
                  <NewTextAreaStyled
                    rows={10}
                    cols={30}
                    id="message"
                    name="message"
                    onChange={handleMessageChange}
                    value={message}
                  />
                  {messageError && numFormSubmissions > 0 && (
                    <NewPErr>Please fill out the message field</NewPErr>
                  )}
                </FormItemStyled>
                <FormItemStyled>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LcQ96waAAAAAKbP_c0n15Cir47s5tel2m7gBzSq"
                    onChange={captchaCompletedAction}
                    theme={isDarkMode ? "dark" : "light"}
                  />
                  {!captchaCompleted && numFormSubmissions > 0 && (
                    <NewPErr>Please complete the ReCAPTCHA</NewPErr>
                  )}
                </FormItemStyled>
              </FormStyled>
              <FlatButton onClick={handleSubmit} className="mb-8">
                Submit
              </FlatButton>
              {formRejected && (
                <NewPErr>
                  Server failed to send message. Please email
                  nhanak.contact@gmail.com directly or try again later
                </NewPErr>
              )}
            </FormWrapper>
          )}
          {formAccepted && (
            <FormWrapper>
              <SuccessWrapper>
                <H1>Your message has been sent, talk to you soon!</H1>
              </SuccessWrapper>
            </FormWrapper>
          )}
        </ProjectSection>
      </PageSectionContainer>
    </>
  );
}
const NoTitle = styled.div`
  height: 0rem;
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 5rem;
  }
`;
const SuccessWrapper = styled.div`
  text-align: center;
`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
`;

const NewPErr = (props: React.PropsWithChildren) => {
  return <p className="text-red-500 pt-2 text-sm">{props.children}</p>;
};

const FormTitleStyled = styled.div`
  text-align: center;
`;

const FormItemStyled = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const NewInputStyled = (props: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      {...props}
      className="pl-2 text-primary bg-tertiary border border-solid border-tertiary py-1 focus:border-accent active:border-accent"
    />
  );
};

const NewFormLabel = (props: React.ComponentPropsWithoutRef<"label">) => {
  return (
    <label className="text-xl pb-2 text-primary font-bold" {...props}>
      {props.children}
    </label>
  );
};

const NewTextAreaStyled = (
  props: React.ComponentPropsWithoutRef<"textarea">,
) => {
  return (
    <textarea
      className="bg-tertiary border border-solid border-tertiary font-base text-primary focus:border-accent p-2"
      {...props}
    ></textarea>
  );
};

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  min-width: 20rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const RedSpan = styled.span`
  color: red;
`;
