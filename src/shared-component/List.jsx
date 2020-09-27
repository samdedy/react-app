import React, { Component } from 'react';

export default class List extends Component{
    render(){
        const {data} = this.props;
        return(
            <ul>
                {
                    // this.props.data.map(item => (
                    data.map(item => (
                        <React.Fragment>
                            <li>
                                Nama: {item.name}, Usia: {item.age}{" "}
                            </li>
                        </React.Fragment>
                    ))
                }
            </ul>
        )
    }
}