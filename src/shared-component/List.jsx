import React, { Component } from 'react';
import { ButtonProps } from './ButtonComponent';

export default class List extends Component{

    state = {
        objectKeys: [],
        loading:true
    };

    // Lifecycle Hooks hanya diproses 1x
    componentDidMount(){
        if(this.props.data[0]){
            this.setState({
                objectKeys: Object.keys(this.props.data[0])
            });
        }
    }

    // Kita hanya ambil key nya saja // {"key", "name", dst}
    // Lifecycle Hooks, hanya diproses pada saat props atau state berubah
    componentDidUpdate(prevProps, prevState) {
        if(this.state.objectKeys.length !== prevState.objectKeys.length){
            console.log(this.state.objectKeys);
            setTimeout(() => {
                this.setState({ loading: false });
            }, 500);
        }
    }

    render(){
        // DESTRUCTURE
        const {data} = this.props;
        const {loading, objectKeys} = this.state;
        
        return(
            <div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <ul>
                        {/* {renderList()} */}
                        {data.map((item) => {
                            return (
                                <li key={item.key}>
                                    {objectKeys.map((key, index) => {
                                        if (index === 0){
                                            return null;
                                        }
                                        return(
                                            <div className="tc">
                                                {objectKeys[index]}: {item[objectKeys[index]]}
                                            </div>
                                        );
                                    })}
                                </li>
                            );
                        })}
                    </ul>
                )}
                
            </div>
        )
    }
}