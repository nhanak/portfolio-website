import React from "react";

export const themes = {
    dark:{
        primaryTextColor:"white",
        secondaryTextColor:"grey",
        invertedPrimaryTextColor:"black",
        primaryAccentColor:"#00ffde",
        primaryBackgroundColor:"#121212",
        primaryBorderColor:"white",
        secondaryBackgroundColor:"#2a2a2a",
    },
    light:{
        primaryTextColor:"black",
        secondaryTextColor:"grey",
        invertedPrimaryTextColor:"white",
        primaryAccentColor:"#742aff",
        primaryBackgroundColor:"white",
        primaryBorderColor:"white",
        secondaryBackgroundColor:"#f0f0f0",
    }
}

export const ThemeContext = React.createContext();


//original primary theme color: #FF0073