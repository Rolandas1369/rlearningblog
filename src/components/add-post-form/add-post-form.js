import React, { Component } from 'react';

import './add-post-form.css';

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
        //alert("Wait for refresh")
        console.log("weee", event)
        //await new Promise(r => setTimeout(r, 3000));

        //window.location.reload(false);
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

    addBold = (e) => {
        this.setState({content: this.state.content + " [b] [/b]"})
    }

    render(){
        const title = this.state.title
        const content = this.state.content
        const file = this.state.file
        const filename = this.state.filename
        const cokieee = localStorage
        
        console.log("coookie", cokieee)
        
        return(
            <div className="add-post-div">
                
                <form className="add-post-form" onSubmit={(e) => this.handleFormSubmit(e)} encType="multipart/form-data">
                    <button className="bold-item" value={this.state.content} onClick={(e) => this.addBold(e)}>Bold</button>
                    <h2>Label for content</h2>
                    
                    <input className="form-input" onChange={this.onLabelChange} type="text" name='title'/>
                    <h3>Content</h3>
                    <textarea onChange={this.onContentChange} type="text" name='content' value={this.state.content}></textarea>
                    <button onClick={() => this.props.addItem(title, content, file, filename)}>Add post</button>
                    <input className="file-upload-button" onChange={(e) => this.handleFile(e)} type="file" name="file"/>
                </form>
            </div>
        )
    }
} 