import React, { Component } from 'react';
import axios from 'axios'

import Posts from '../post';
import Header from '../header';
import Blog from '../blog';


require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export default class App extends Component {

    state = {
        itemList: '',
        item: ''
    };

    getAllPosts = () => {
        axios.get(API_URL + "/posts/")
        .then((data) => {
            this.setState({ itemList: data.data})
        })
        .catch(console.log);
    }

    getPost = (id) => {
        axios.get(API_URL + `/posts/${id}`)
        .then((item) => {
            this.setState({ item: item.data})
        })
        .catch(console.log);
    }

    componentDidMount = () => {
        this.getAllPosts()
        this.getPost(1)
    }

    render() {

        const { itemList, item } = this.state;
        
        return (
            <div>
                <Header />
                <Posts items={itemList}/>
                <Blog item={item}/>
            </div>
        )
    }
}