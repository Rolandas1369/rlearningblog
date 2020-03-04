import React, { Component } from 'react';
import axios from 'axios'

import Header from '../header';
import PostList from '../post-list';
import AddPostForm from '../add-post-form';

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
            console.log('data from list', data)
            this.setState({ itemList: data.data})
        })
        .catch(console.log);
    }

    getPost = (id) => {
        axios.get(API_URL + `/posts/${id}/`)
        .then((item) => {
            console.log(item)
            this.setState({ item: item.data})
        })
        .catch(console.log);
    }

    componentDidMount = () => {
        this.getAllPosts()
    }

    removeElement = (id) => {
        axios
            .delete(API_URL + `/posts/${id}/`)
            .then(this.setState(({ itemList }) => {
                const idx = itemList.findIndex((el) => el.id === id)
                console.log("deleted index", id, 'element id', idx)
                const before = itemList.slice(0, idx)
                const after = itemList.slice(idx + 1)
                const all = [...before, ...after]

                return {
                    itemList: all
                } 
            }))
    }

    addItem = (e) => {
        e.preventDefault()
        console.log('item')
    }

    render() {

        const { itemList } = this.state;
        console.log('From list', itemList)
        return (
            <div className='main'>
                <Header />
                <AddPostForm addItem={this.addItem}/>
                <PostList onDeleted={(id)=> this.removeElement(id)} items={itemList}/>
                {itemList.title}
                
            </div>
        )
    }
}