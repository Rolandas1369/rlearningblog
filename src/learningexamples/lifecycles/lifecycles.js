import React, { Component } from 'react';

import './lifecycles.css';

const API_URL = process.env.REACT_APP_API_URL

export default class LifeCycle extends Component { 

    state = {
        post: [],
        id: 1,
        availableIds: []
    }

    getAllCurrentPostsIds = async () => {
        let response = await fetch(API_URL + '/api/posts/')
        if (response.ok) { 
            let json = await response.json();
            let postsArray = Object.values(json)
            let ids = []
            postsArray.map((obj) => ids.push(obj.id))
            this.setState({availableIds: ids})
          } else {
            alert("HTTP-Error: " + response.status);
          }
    }

    getOnePost = async (id) => {
        let response = await fetch(`${API_URL}/api/posts/${id}`)
        if (response.ok) { 
            let json = await response.json();
            this.setState({post: json})
          } else {
            alert("HTTP-Error: " + response.status);
          }
    }

    componentDidMount() {
        // mounting first element
        this.getOnePost(14)
        // mounting all posts to get available ids
        this.getAllCurrentPostsIds()         
    }

    componentDidUpdate(prevProps, prevState) {
        // we can compare on previous props or previuos state
        // in our case it is state
        if (prevState.id !== this.state.id) {
            // if somewhere we change state(or props) this function is fired
            // basicaly componentDidUpdate is tracking state or props change          
            this.updateBar(this.state.id);
        }
    }

    updateBar = (id) => {
        //need to check if id is ok
        if(id === null) {
            return
        }
        this.getOnePost(id)
    }

    postContent = () => {
        let { post } = this.state
        return <p>{post.content}</p>
    }

    // Changing state id from button click
    // this will triger componentDidUpdate
    changeId = (idFromButton) => {
        this.setState({id: idFromButton})
    }

    displayAvailableIds = () => {
        let ids = this.state.availableIds
        return ids.map((id) => <button key={id} onClick={() => this.changeId(id)}>{id}</button>)
    }

    render () {

        // one entry to display from api
        let postContent = this.postContent(1)
        
        // all ids what are available for rendering
        let buttonsWithIds = this.displayAvailableIds()
        
        return (
            <div>
                {postContent}
                {buttonsWithIds}
            </div>
        )
    }
}