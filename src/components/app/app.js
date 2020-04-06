import React, { Component } from 'react';

import Header from '../header';
import PostList from '../post-list';
import AddPostForm from '../add-post-form';
import Description from '../description';
import NavigatableList from '../navigatable_list';
import AnyList from '../any-list';

import LifeCycles from '../../learningexamples/lifecycles';

import DataService from '../../services/data_service';

import './app.css'

import { BrowserRouter as Router, Route} from 'react-router-dom'

require('dotenv').config()


export default class App extends Component {

    dataService = new DataService()

    state = {
        itemList: '',
        hasError: false,
        isUser: '',
        color: ''
    };

    componentDidMount = () => {
        this.dataService.checkUser()
        .then((res) => this.setState({isUser: res.data.username}))

        this.dataService.getHtmlChanges().then((x) => 
        this.setState({color: x.data.background_color}))

        this.dataService
        .getAllPosts()
        .then((data) => {
            this.setState({ itemList: data.data})})
    }

    handleDelete = (id, items) => {
        
        let updated_list = this.dataService.removeElement(id, items)
        this.setState({itemList: updated_list})
    }

    changeBackGroudColor = (e) => {
        
        this.dataService.changeHtmlColor(e.target.value)
        console.log(e.target.value)
        this.setState({color: e.target.value})
    }

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
                        <div style={{backgroundColor: this.state.color}}>
                            <Header />
                            <label htmlFor="backColor">ChangeBackground </label>
                            <input type="color" name="backColor" onChange={(e) => {this.changeBackGroudColor(e)}} />
                            <Description />
                            <div className="aligner">
                                <div className="des-nav">
                                    {/* <Description getData={this.dataService.getAllFeatures} user={isUser}/> */}
                                    <div>
                                        <AnyList getData={this.dataService.getAllFeatures}
                                                user={isUser}
                                                feature="features"
                                                headline="Features"/>
                                        <AnyList getData={this.dataService.getAllInsights}
                                                user={isUser}
                                                feature="insights"
                                                headline="Insights"/>
                                    </div>
                                    <NavigatableList getData={this.dataService.getAllPosts}/>
                                </div>
                            </div>
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