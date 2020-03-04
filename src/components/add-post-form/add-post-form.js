import React, { Component } from 'react';

import './add-post-form.js';

export default class AddPostForm extends Component { 

    state = {
        title: '',
        content: ''
    }


    onLabelChange = (e) => {
        this.setState({ title: e.target.value})
    }

    onContentChange = (e) => {
        this.setState({ content: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state.title, this.state.content)
    }

    render(){

        // console.log(this.state.title)

        return(
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onLabelChange} type="text" />
                <input onChange={this.onContentChange} type="content" />
                <button >Add content</button>
            </form>
        )
    }
} 