import React from "react";

export default function Input(props){
    const styleInput = {
        padding: "5px",
        border: "2px solid orange"
    }

    return(
        <input style={styleInput} onChange={props.onChange}/>
    )
}