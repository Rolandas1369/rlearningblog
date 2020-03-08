import React, { Component } from 'react';

import './add-post-form.js';

export default class AddPostForm extends Component { 

    state = {
        title: 'dd',
        content: 'dd',
        file: null
    }


    handleFile = (e) => {
        let file = e.target.files[0]

        this.setState({file: file})
    }

    handleFormSubmit = async (event, requestType) => {
        event.preventDefault();
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
        this.setState({title: "this", content: "is"})
    } 

    render(){
        const title = this.state.title
        const content = this.state.content
        const file = this.state.file
        
        
        console.log(title)

        return(
            <form onSubmit={(e) => this.handleFormSubmit(e)} encType="multipart/form-data">
                
                <input onChange={this.onLabelChange} type="text" name='title'/>
                <input onChange={this.onContentChange} type="content" name='content'/>
                
                <button onClick={() => this.props.addItem(title, content, file)}>Add content</button>
                <input onChange={(e) => this.handleFile(e)} type="file" name="file" />
            </form>
        )
    }
} 