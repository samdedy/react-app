import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonDenganChildrenProps, ButtonProps } from './shared-component/ButtonComponent';
import Paragraph from './shared-component/Paragraph';
import List from './shared-component/List';
import Input from './shared-component/Input';

const dataBaru = [];
for(let i=0; i<10; i++){
    dataBaru.push({
        key: i,
        name: 'One',
        usia: `Usia ke ${i}`
    })
}

export default function App() {
  const data = [{name: "Onesinus SPT", age:22}, {name: "Melendoy", age: 23}];

  const [dataList, setdataList] = useState([]);

  const [valueInput, setvalueInput] = useState("User belum melakukan input");

  function onClickTombolQue(){
    console.log("tombol que diklik");
  }

  function handleChange() {
    setdataList(dataBaru);
  } 

  function onChangeInput(e){
    console.log(e.target.value);
    setvalueInput(e.target.value);
  }

  function onEnterInput(e){// add ke akhir data
    if(e.key == "Enter"){
      let gabunganData = dataList.concat([{
        key: dataList.length + 1,
        name: e.target.value,
        usia: `Usia ke ${dataList.length + 1}`
      }]);
      setdataList(gabunganData);
    }
  }

  // function onEnterInput(e){ // add ke data pertama
  //   if(e.key == "Enter"){
  //     let gabunganData = [{
  //       key: dataList.length + 1,
  //       name: e.target.value,
  //       usia: `Usia ke ${dataList.length + 1}`
  //     }].concat(dataList);
  //     setdataList(gabunganData);
  //   }
  // }

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
        <ButtonProps nama="Tombol Ubah Data List" onClick={handleChange}/>
        <List data={dataList}/>
        <Input onChange={onChangeInput} onKeyDown={onEnterInput}/>
        <p>{valueInput}</p>
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