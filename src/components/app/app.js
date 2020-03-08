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
        item: '', 
        image: '',
        filename: ''
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

    getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    removeElement = (id) => {

        let cokie = this.getCookie('csrftoken');

        axios
            .delete(API_URL + `/posts/${id}/`, {headers: {'X-CSRFToken': cokie, 'Accept': 'application/json',
                'Content-Type': 'application/json'}})
            .then(this.setState(({ itemList }) => {
                const idx = itemList.findIndex((el) => el.id === id)
                itemList.splice(idx, 1)
                const newItemList = [...itemList.slice(0, idx), ...itemList.slice(idx)]
                return {
                    itemList: newItemList
                } 
            }))
    }

    addItem = async (item, content, image, filename) => {

        let cokie = this.getCookie('csrftoken');
        
        console.log("item=>", item, "content=>", content, "file=>", image, "filename->", filename)

        let formData = new FormData()

        
        formData.append('title', item)
        formData.append('content', content)
        formData.append('image', image, image.name)
        formData.append('filename', filename)

    

        console.log("formdata", formData.get("image"))

        await axios.post(API_URL + "/posts/create/", 
            formData, 
            {headers: {'X-CSRFToken': cokie, 'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',}}
            )
            .then(this.getAllPosts())
    };

    render() {

        const { itemList } = this.state;
        console.log('From list', itemList)
        return (
            <div className='main'> 
                    <Header />
                    <AddPostForm 
                        addItem={this.addItem}/>
                    <PostList 
                        onDeleted={(id)=> this.removeElement(id)} 
                        items={itemList}/>
                    {itemList.title}
            </div>
        )
    }
}