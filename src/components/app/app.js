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

    handleDelete = (id, items) => {
        
        let updated_list = this.dataService.removeElement(id, items)
        this.setState({itemList: updated_list})
    }

    // removeElement = (id) => {

    //     let cokie = this.dataService.getCookie('csrftoken');

    //     axios
    //         .delete(API_URL + `/api/posts/${id}/`, 
    //                {headers: {'X-CSRFToken': cokie, 
    //                           'Accept': 'application/json',
    //                           'Content-Type': 'application/json'}})
    //         .then(this.setState(({ itemList }) => {
    //             const idx = itemList.findIndex((el) => el.id === id)
    //             itemList.splice(idx, 1)
    //             const newItemList = [...itemList.slice(0, idx), ...itemList.slice(idx)]
    //             return {
    //                 itemList: newItemList
    //             } 
    //         }))
    // }

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
                            addItem={this.dataService.addItem}/>
                        } />
                        
                    <Route path="/" render = {() => 
                        <div>
                            <Header />
                            <Description getData={this.dataService.getAllFeatures}/>
                            {/* Functions can be passed as props */}
                            <NavigatableList getData={this.dataService.getAllPosts}/>
                            <PostList 
                            onDeleted={(id, items) => this.handleDelete(id, items)} 
                            items={itemList}
                            user={isUser}/>
                        </div>
                        } exact/>
                </div>
            </Router>
        )
    }
}