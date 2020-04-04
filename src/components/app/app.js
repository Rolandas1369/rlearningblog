import React, { Component } from 'react';
import axios from 'axios'

import Header from '../header';
import PostList from '../post-list';
import AddPostForm from '../add-post-form';
import Description from '../description';
import NavigatableList from '../navigatable_list';

import LifeCycles from '../../learningexamples/lifecycles';

import DataService from '../../services/data_service';

import './app.css'

import { BrowserRouter as Router, Route} from 'react-router-dom'

require('dotenv').config()

const API_URL = process.env.REACT_APP_API_URL

export default class App extends Component {

    dataService = new DataService()

    state = {
        itemList: '',
        item: '', 
        image: '',
        filename: '',
        hasError: false,
        isUser: ''
    };

    componentDidMount = () => {
        this.dataService.checkUser()
        .then((res) => this.setState({isUser: res.data.username}))

        this.dataService
        .getAllPosts()
        .then((data) => {
            this.setState({ itemList: data.data})})
    }

    removeElement = (id) => {

        let cokie = this.dataService.getCookie('csrftoken');

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

    addItem = (item, content, image, filename, gist_id, gist_filename, video_src, lang_choice) => {

        let cokie = this.dataService.getCookie('csrftoken');
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
    };

    render() {

        const { itemList, isUser } = this.state;


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
                            {/* Functions can be passed as props */}
                            <NavigatableList getData={this.dataService.getAllPosts}/>
                            <PostList 
                            onDeleted={(id)=>this.removeElement(id)} 
                            items={itemList}
                            user={isUser}/>
                        </div>
                        } exact/>
                </div>
            </Router>
        )
    }
}