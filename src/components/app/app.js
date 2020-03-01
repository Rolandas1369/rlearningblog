import React, { Component } from 'react';
import Posts from '../post';

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export default class App extends Component {

    state = {
        itemList: '',
        ss: {}
    };

    componentDidMount = () => {
        fetch(API_URL + "/api/")
        .then((res) => res.json())
        .then((data) => {
            this.setState({ itemList: data})
        })
        .catch(console.log);
    }

    render() {

        
        console.log('what', this.state.itemList);
        const { itemList } = this.state;
        console.log("from items", itemList);

        return (
            <div>
                
                <Posts items={this.state.itemList}/>
            </div>
        )
    }
}