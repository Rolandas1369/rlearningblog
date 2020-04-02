import React, { Component } from 'react';
import axios from 'axios';

import './navigatable_list.css'

const API_URL = process.env.REACT_APP_API_URL

export default class NavigatableList extends Component {

    state = {
        navigate: {}
    }

    componentDidMount() {
        this.getAllPosts()
    }

    createNavigatableList = (nav_list) => {
        
       return nav_list.map((element) => {
            return <div><a href={"#" + element.id}>{element.id}. {element.title}</a></div>
        });
    }

    getAllPosts = async () => {
        await axios.get(API_URL + "/api/posts/")
        .then((data) => {
            this.setState({ navigate: data.data})
        })
        .catch(console.log);
    }

    render() {

        let nav_list = this.state.navigate
        let completed_list = ''
        if(nav_list.length > 0){
            completed_list = this.createNavigatableList([...nav_list])
        }
        
        //let list_wall = this.createNavigatableList(cc)
        return(
            <div className="navigatable-list">
                    {completed_list}
            </div>
        )
    }
}