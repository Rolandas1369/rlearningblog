import React, { Component } from 'react';
import axios from 'axios';

import './navigatable_list.css'

const API_URL = process.env.REACT_APP_API_URL

export default class NavigatableList extends Component {

    state = {
        navigate: {},
        hasError: false,
        test: 1,
        
    }

    componentDidMount() {
        this.getAllPosts()
    }

    

    createNavigatableList = (nav_list) => {
        
       return nav_list.map((element) => {
            return <div key={element.id}><a href={"#" + element.id}>{element.id}. {element.title}</a></div>
        });
    }

    getAllPosts = async () => {
        await axios.get(API_URL + "/api/posts/")
        .then((data) => {
            this.setState({ navigate: data.data})
        })
        .catch(console.log);
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {

        if(this.state.render_error){
            this.foo.bar = 1
        }

        if(this.state.hasError){
            return <p style={{ color: 'red'}}>You created error no list will be displayed</p>
        }

        let nav_list = this.state.navigate
        let completed_list = ''
        if(nav_list.length > 0){
            completed_list = this.createNavigatableList([...nav_list])
        }

        return(
            <div className="navigatable-list">
                <h3>Posts navigatable list</h3>
                    {completed_list}
                    <ErrorButton />
            </div>
        )
    }
}

class ErrorButton extends Component {
    state = {
        render_error: false
    }
    render() {
        if(this.state.render_error){
            this.foo.bar = 1
        }
        return (
            <button onClick={() => this.setState({render_error: true})}>Break List</button>
        )
    }
}