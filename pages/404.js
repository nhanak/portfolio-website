import React from "react";
import styled from "styled-components";
import H1 from "../components/H1/H1";
import P from "../components/P/P";
import Head from "next/head";
export default function Custom404() {
    return( 
        <>
        <Head>
          <title>404 - Neil Hanak</title>
        </Head>
        <FourOhFourWrapper>
            <H1>404 - Page Not Found 😞</H1>
            <P>The page you requested does not exist</P>
        </FourOhFourWrapper>
        </>
        )
  }

const FourOhFourWrapper = styled.div`
  height:70vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`