import React from 'react';
import styles from "../css/button.module.css";

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

function ButtonFixedWithType({type, onClick}){
    const addStyle = `${styles.btn} ${styles.btn_add}`;
    const editStyle = `${styles.btn} ${styles.btn_edit}`;
    const deleteStyle = `${styles.btn} ${styles.btn_delete}`;

    const typeOfButton = [
        {
            type: "add",
            name: "Add",
            style: addStyle
        },
        {
            type: "edit",
            name: "Edit",
            style: editStyle
        },
        {
            type: "delete",
            name: "Delete",
            style: deleteStyle
        }
    ];

    const renderButton = typeOfButton.map(item => {
        if(item.type === type){
            return(
                <button className={item.style} onClick={onClick} key={item.name}>
                    {item.name}
                </button>
            )
        }
    })

    return <React.Fragment>{renderButton}</React.Fragment>
}

export default Button;
export {ButtonProps, ButtonDenganChildrenProps, ButtonWithObjectProps, ButtonFixedWithType}