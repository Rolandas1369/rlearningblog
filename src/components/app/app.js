import React, { Component } from 'react';
import axios from 'axios'
import { CookiesProvider } from 'react-cookie';

import Header from '../header';
import PostList from '../post-list';
import AddPostForm from '../add-post-form';

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export default class App extends Component {

    state = {
        itemList: '',
        item: '', 
        image: ''
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
        
        console.log("Id of elelem",id)
        axios

            .delete(API_URL + `/posts/${id}/`)
            
            .then(this.setState(({ itemList }) => {
                const idx = itemList.findIndex((el) => el.id === id)
                // removing item that we want to remove
                itemList.splice(idx, 1)
                const newItemList = [...itemList.slice(0, idx), ...itemList.slice(idx)]

                return {
                    itemList: newItemList
                } 
            }))
    }

    addItem = (item, content, image) => {

        console.log("item=>", item, "conte=>", content, "ime", image)

        let file = this.state.file

        let formData = new FormData()
        
        formData.append('title', item)
        // formData.append('image', file)
        
        formData.append('content', content)

        console.log(API_URL + `/posts/`)

        
        // var csrftoken = getCookie('csrftoken');
        // var headers = new Headers();
        // headers.append('X-CSRFToken', csrftoken);
        // fetch('/api/upload', {
        //     method: 'POST',
        //     body: formData,
        //     headers: headers,
        //     credentials: 'include'
        // })

        axios.post(API_URL + `/posts/create`,{title: item, content: content})


    };

    render() {

        const { itemList } = this.state;
        console.log('From list', itemList)
        return (
            <div className='main'>
                <CookiesProvider>
                    <Header />
                    <AddPostForm addItem={this.addItem}/>
                    <PostList onDeleted={(id)=> this.removeElement(id)} items={itemList}/>
                    {itemList.title}
                </CookiesProvider>
                
            </div>
        )
    }
}