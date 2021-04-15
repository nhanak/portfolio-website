import React from "react";
import Head from "next/head";

export default function SiteHead(props){
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
        </Head>
    )
}