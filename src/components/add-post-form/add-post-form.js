import React, { Component } from 'react';

import './add-post-form.js';

export default class AddPostForm extends Component { 

    state = {
        title: '',
        content: '',
        file: null,
        filename: ''
    }

    handleFile = (e) => {
        let file = e.target.files[0]
        this.setState({file: file, filename: file.name})
        console.log("file props", file)
    }

    handleFormSubmit = async (event) => {
        
        event.preventDefault()
        console.log("weee", event)
        await new Promise(r => setTimeout(r, 3000));
        window.location.reload(false);
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

    componentDidMount = () =>  {
        this.setState({title: "title", content: "content", file: null})
    } 

    render(){
        const title = this.state.title
        const content = this.state.content
        const file = this.state.file
        const filename = this.state.filename
        
        return(
            <form onSubmit={(e) => this.handleFormSubmit(e)} encType="multipart/form-data">
                <input onChange={this.onLabelChange} type="text" name='title'/>
                <input onChange={this.onContentChange} type="content" name='content'/>
                <button onClick={() => this.props.addItem(title, content, file, filename)}>Add post</button>
                <input onChange={(e) => this.handleFile(e)} type="file" name="file" />
            </form>
        )
    }
} 