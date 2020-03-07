import React, { Component } from 'react';
import axios from 'axios'
import { CookiesProvider } from 'react-cookie';

import Header from '../header';
import PostList from '../post-list';
import AddPostForm from '../add-post-form';

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL
const max_id = 100
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


        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        let cokie = getCookie('csrftoken');

        console.log("you cookie ius", cokie)
        
        console.log("Id of elelem",id)
        axios

            .delete(API_URL + `/posts/${id}/`, {headers: {Authorization: cokie}})
            
            .then(this.setState(({ itemList }) => {
                const idx = itemList.findIndex((el) => el.id === id)
                // removing item that we want to remove only to commit
                itemList.splice(idx, 1)
                const newItemList = [...itemList.slice(0, idx), ...itemList.slice(idx)]

                return {
                    itemList: newItemList
                } 
            }))
    }

    addItem = (item, content, image) => {
        
        console.log("item=>", item, "conte=>", content, image)
        
        //yV5a9avgR5TRCd9OiW9z6crgjPkf5928Dk4MdojekhJb2i9cA9HFX1bS7hBSrUra

        axios.post(API_URL + "/posts/create/", 
            {id: max_id, title: item, content: content}, {config: {xsrfCookieName: 'XSRF-TOKEN', xsrfHeaderName: 'X-XSRF-TOKEN'}}



            )
        .then((err) => console.log(err))
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