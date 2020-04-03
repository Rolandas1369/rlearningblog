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
        this.getOnePost(165)
        this.getAllCurrentPostsIds()         
    }

    

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {  
            this.updateBar(this.state.id);
        }
    }

    

    updateBar = (id) => {
        if(id === null) {
            return
        }
        this.getOnePost(id)
    }

    postContent = () => {
        let { post } = this.state
        return <p>{post.content}</p>
    }

    changeId = (idFromButton) => {
        this.setState({id: idFromButton})
    }

    displayAvailableIds = () => {
        let ids = this.state.availableIds
        return ids.map((id) => <button key={id} onClick={() => this.changeId(id)}>{id}</button>)
    }

    render () {

        if(this.state.hasError){
            return <p>has error</p>
        }

        let postContent = this.postContent(1)
        
        let buttonsWithIds = this.displayAvailableIds()
        
        return (
            <div>
                {postContent}
                {buttonsWithIds}
                
            </div>
        )
    }
}