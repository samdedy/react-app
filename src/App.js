import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { ButtonDenganChildrenProps, ButtonFixedWithType, ButtonProps, ButtonWithObjectProps } from './shared-component/ButtonComponent';
import Paragraph from './shared-component/Paragraph';
import List from './shared-component/List';
import Input from './shared-component/Input';
import Form from './shared-component/Form';

const dataBaru = [];
for(let i=0; i<10; i++){
    dataBaru.push({
        key: i,
        name: 'One',
        usia: `Usia ke ${i}`,
        hoby: 'Mandi'
    })
}

export default function App() {
  const data = [{name: "Onesinus SPT", age:22}, {name: "Melendoy", age: 23}];

  const [dataList, setdataList] = useState([
      {
        key: -1,
        name: "Santuy",
        usia: 76,
        hoby: "Mancing Keributan"
      }
  ]);

  const [valueInput, setvalueInput] = useState("User belum melakukan input");

  const [arrForm, setArrForm] = useState({});

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

  function onClickBtnSimpan(){
    console.log(arrForm);
  }

  function onChangeFormInput(field, e){
    let dataForm = arrForm;
    dataForm[field] = e.target.value;
    setArrForm(dataForm);
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
        <ButtonProps nama="Tombol Ubah Data List" onClick={handleChange}/>
        <List data={dataList}/>
        <Input onChange={onChangeInput} onKeyDown={onEnterInput}/>
        <p>{valueInput}</p>
        <Form>
          <label>Nama</label>
          <Input onChange={(e) => onChangeFormInput("nama", e)}/>
          <label>Jabatan</label>
          <Input onChange={(e) => onChangeFormInput("jabatan", e)}/>
          <label>Usia</label>
          <Input onChange={(e) => onChangeFormInput("usia", e)}/>
          <ButtonProps nama="Simpan" color="blue" onClick={onClickBtnSimpan}/>
          <p>Data dari form</p>
        </Form>
        <ButtonWithObjectProps name="Add" style={{color: "blue", height: "50px"}}/>
        <ButtonWithObjectProps name="Edit" style={{color: "red", height: "40px"}}/>
        <ButtonWithObjectProps name="Delete" style={{color: "green", height: "30px"}}/>

        <br/>

        <ButtonFixedWithType type="add" onClick={onClickTombolQue}/>
        <ButtonFixedWithType type="edit" onClick={onClickTombolQue}/>
        <ButtonFixedWithType type="delete" onClick={onClickTombolQue}/>
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