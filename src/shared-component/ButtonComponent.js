import React from 'react';

function Button(){
    const style = {
      padding: "5px 10px",
      color: "red",
      border: "solid 2px red"
    }
    return <button style={style}>Test Button</button>
}

function ButtonProps(props){
    const style = {
        padding: "5px 10px",
        color: props.color,
        border: 'solid 2px ${props.color}'
    }
    return <button style={style} onClick={props.onClick}>{props.nama}</button>
}

function ButtonDenganChildrenProps(props){
    const style = {
        padding: "5px 10px",
        color: props.color,
        border: 'solid 2px ${props.color}'
    }
    return <button style={style}>{props.children}</button>
}

function ButtonWithObjectProps(props){
    return <button style={props.style}>{props.name}</button>
}

export default Button;
export {ButtonProps, ButtonDenganChildrenProps, ButtonWithObjectProps}