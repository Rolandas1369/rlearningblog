import React, { Component } from 'react';
import axios from 'axios'

import Header from '../header';
import PostList from '../post-list';
import AddPostForm from '../add-post-form';
import Description from '../description';
import NavigatableList from '../navigatable_list';

import LifeCycles from '../../learningexamples/lifecycles';

import './app.css'

import { BrowserRouter as Router, Route} from 'react-router-dom'

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export default class App extends Component {

    state = {
        itemList: '',
        item: '', 
        image: '',
        filename: '',
        hasError: false
    };

    checkLogin = () => {

        let cokie = this.getCookie('csrftoken');

        axios.get(API_URL + "/rest-auth/user/",  
            {headers: {'X-CSRFToken': cokie, 
        'Accept': 'application/json',
        'Content-Type': 'application/json'}})
        
        .then((data) => {
            console.log('data form login', data.data)
            
        })
        .catch(console.log);
        
    }

    getAllPosts = async () => {
        await axios.get(API_URL + "/api/posts/")
        .then((data) => {
            //console.log('data from list', data.data)
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
            .delete(API_URL + `/api/posts/${id}/`, 
                    {headers: {'X-CSRFToken': cokie, 
                               'Accept': 'application/json',
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

    addItem = (item, content, image, filename, gist_id, gist_filename, video_src, lang_choice) => { // add lang_choice

        let cokie = this.getCookie('csrftoken');

        let formData = new FormData()

        formData.append('title', item)
        formData.append('content', content)
        if(image !== null) {
            formData.append('image', image, image.name)
            formData.append('filename', filename)
            
        }
        formData.append('gist_id', gist_id)
        formData.append('gist_filename', gist_filename)
        formData.append('video_src', video_src)
        formData.append('language_choice', lang_choice) //model name
        
        
        

        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

            // set this axios.post(API_url + "/api/posts/create/", made a hard error to debug 
        axios.post("/api/posts/create/", 
                formData, 
                {headers: {'X-CSRFToken': cokie, 
                           'Accept': 'application/json',
                           'Content-Type': 'multipart/form-data', 
                           Authorization: cokie}})
                .then(console.log("Ok"))
                
                //.then(this.getAllPosts())
        
            
    };

    render() {

        //const loggedIn = this.checkLogin()
        const { itemList } = this.state;
        //console.log('Is logged', loggedIn)
        return (
            <Router>
                <Route path="/lifecycles" render={() => 
                    <LifeCycles />
                }/>
                <div className='main'>      
                    <Route path="/create" render={() =>
                        <AddPostForm 
                            addItem={this.addItem}/>
                        } />
                        
                    <Route path="/" render = {() => 
                        <div>
                            <Header />
                            <Description />
                            <NavigatableList />
                            <PostList 
                            onDeleted={(id)=> this.removeElement(id)} 
                            items={itemList}/>
                            {itemList.title}
                        </div>
                        } exact/>
                    
                </div>
            </Router>
        )
    }
}