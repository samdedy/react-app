import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  function onClickTombolQue(){
    console.log("tombol que diklik");
  }
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <HelloClass/>
        <Button/>
        <ButtonProps nama="TombolQue" color="green" onClick={onClickTombolQue}/>
      </header>
    </div>
  );
}

function Hello() {
  const [nama, setNama] = useState("Lesiong");
  const [jabatan, setJabatan] = useState("Santuy Senior");
  const [usia, setUsia] = useState(41);
  return (
    <div>
      <h1>Hello {nama}</h1>
      <p>jabatan anda: {jabatan}</p>
      <p>usia anda: {usia}</p>
    </div>
  );
}

class HelloClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      nama: "Santuy",
      jabatan: "Melendoy developer",
      usia: 14
    }
  }
  
  render(){
    const {nama, jabatan, usia} = this.state;
    return (
      <div>
        <h1>Hello {nama}</h1>
        <p>jabatan anda: {jabatan}</p>
        <p>usia anda: {usia}</p>
      </div>
    );
  }
}

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
