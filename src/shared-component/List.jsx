import React, { Component } from 'react';
import { ButtonProps } from './ButtonComponent';

const dataBaru = [];
for(let i=0; i<10; i++){
    dataBaru.push({
        key: i,
        name: 'One',
        usia: `Usia ke ${i}`
    })
}

export default class List extends Component{
    state = {nama: "Andry Bryan", data: []};

    handleChange = () => {
        this.setState({data: dataBaru});
    }

    render(){
        const {data} = this.state;
        return(
            <div>
                <ButtonProps nama="Tombol Ubah Data List" onClick={this.handleChange}/>
                <ul>
                    {
                        data.map(item => (
                            <li key={item.key}>
                                Nama: {item.name}, Usia: {item.usia}{" "}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}