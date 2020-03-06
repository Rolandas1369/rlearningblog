import React, { Component } from 'react';

import './add-post-form.js';

export default class AddPostForm extends Component { 

    state = {
        title: 'dd',
        content: 'dd'
    }


    onLabelChange = (e) => {
        this.setState({ title: e.target.value})
    }

    onContentChange = (e) => {
        this.setState({ content: e.target.value})
    }

    addImage = (e) => {
        this.setState({ item: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        // console.log(this.state.title, this.state.content)
    }

    componentDidMount = () =>  {
        this.setState({title: "fuck", content: "me"})
    } 

    render(){
        const title = this.state.title
        const content = this.state.content
        
        
        console.log(title)

        return(
            <form onSubmit={(e) => this.onSubmit(e)}>
                <input onChange={this.onLabelChange} type="text" />
                <input onChange={this.onContentChange} type="content" />
                
                <button onClick={() => this.props.addItem(title, content)}>Add content</button>
                <input onChange={this.addImage} type="file" />
            </form>
        )
    }
} 