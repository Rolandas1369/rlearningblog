import React, { Component } from 'react';

import Header from '../header';
import PostList from '../post-list';
import AddPostForm from '../add-post-form';
import Description from '../description';
import NavigatableList from '../navigatable_list';
import AnyList from '../any-list';
import Tech from '../tech';

import LifeCycles from '../../learningexamples/lifecycles';

import DataService from '../../services/data_service';

import './app.css'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import UpdatePostForm from '../update-post-form';

require('dotenv').config()


const DescriptionFirstSentence = (props) => {
    let textBellow = props.children.headerText
    console.log(textBellow)
    return (   
            <div>
                <div>Learn something new and try it on this project does't mater if it makes looks ugly or useless at all in this project</div>
                <ul>
                    <li style={{color: props.children.textColor}}>{textBellow}</li>
                </ul>
            </div>      
    )
}

const DescriptionSecondSentence = (props) => {

    return (   
        <div>
            <p>This element is accesable in cloned children: {props.newItem}</p> 
            <p>Add new features plan those you want to implemen</p>
        </div>    
    )
}

const DescriptionThirdSentence = () => {
    return (   
            <div>What i want to learn, next or ,learning</div>
    )
}

const AppDescriptionContainer = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}


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
        let appDescriptionComponent = (
            <AppDescriptionContainer header="Things to remember doing this project">
                {[1,2,3]}
            </AppDescriptionContainer>
            )

        return (
            <Router>
                <Route path="/lifecycles" render={() => 
                    <LifeCycles />
                }/>
                <Route path="/tech" render={() => 
                    <Tech />
                }/>
                <div className='w-full'>      
                    <Route path="/create" render={() =>
                        
                        <AddPostForm 
                            addItem={this.dataService.addItem}/>
                        } />
                    <Route path="/update/:id" render={({match}) => {
                        const { id } = match.params 
                        return <UpdatePostForm id={id}
                            addItem={this.dataService.addItem}/>
                        }} />
                        
                    <Route path="/" render = {() => 
                        <div style={{backgroundColor: this.state.color}}>
                            <Header />
                            <div className="w-full text-center">
                                <label htmlFor="backColor">ChangeBackground </label>
                                <input type="color" name="backColor" onChange={(e) => {this.changeBackGroudColor(e)}} />
                            </div>
                            <Description addHeader={appDescriptionComponent}>        
                                
                                
                                <DescriptionFirstSentence>
                                    {{headerText: 'a lot of data is hard for user expierence', textColor:"pink"}}
                                </DescriptionFirstSentence>
                                <DescriptionSecondSentence />
                                <DescriptionThirdSentence />
                                      
                            </Description>
                            <div className="aligner">
                                <div className="w-1/2">
                                    {/* <Description getData={this.dataService.getAllFeatures} user={isUser}/> */}
                                    <div className="">
                                        <AnyList getData={this.dataService.getAllFeatures}
                                                user={isUser}
                                                feature="features"
                                                headline="Features"/>
                                        <AnyList getData={this.dataService.getAllInsights}
                                                user={isUser}
                                                feature="insights"
                                                headline="Insights"/>
                                        <NavigatableList getData={this.dataService.getAllPosts}/>
                                    </div>
                                    
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