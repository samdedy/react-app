import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonDenganChildrenProps, ButtonProps } from './shared-component/ButtonComponent';
import Paragraph from './shared-component/Paragraph';
import List from './shared-component/List';

export default function App() {
  const data = [{name: "Onesinus SPT", age:22}, {name: "Melendoy", age: 23}];
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
        <ButtonDenganChildrenProps>
          <div>Test</div>
        </ButtonDenganChildrenProps>
        <Paragraph nama="Santuy" jabatan="Gabut Manager">
          <div>Children dari Paragraph Component</div>
        </Paragraph>
        <List data={data}/>
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