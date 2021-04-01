import React from "react";

export const themes = {
    dark:{
        primaryTextColor:"white",
        secondaryTextColor:"grey",
        primaryAccentColor:"#00ffde",
        primaryBackgroundColor:"#121212",
        primaryBorderColor:"white",
        secondaryBackgroundColor:"#121212",
    },
    light:{
        primaryTextColor:"black",
        secondaryTextColor:"grey",
        primaryAccentColor:"#742aff",
        primaryBackgroundColor:"white",
        primaryBorderColor:"white",
        secondaryBackgroundColor:"#121212",
    }
}

export const ThemeContext = React.createContext();


//original primary theme color: #FF0073