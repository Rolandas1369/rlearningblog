import React, { Component } from 'react';
import axios from 'axios'

import Post from '../post';
import Header from '../header';
import PostList from '../post-list/post-list';


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
        axios.get(API_URL + `/posts/${id}/`)
        .then((item) => {
            console.log(item.j)
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
        console.log('From list', itemList)
        return (
            <div>
                <Header />
                <PostList items={itemList}/>
                {itemList.title}
                {/* <Post item={item}/>  */}
            </div>
        )
    }
}