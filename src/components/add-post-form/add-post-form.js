import React, { Component } from 'react';

import './add-post-form.js';
import DjangoCSRFToken from 'django-react-csrftoken'
import axios from 'axios'
export default class AddPostForm extends Component { 

    state = {
        title: 'dd',
        content: 'dd',
        file: null
    }


    handleFormSubmit = async (event, requestType) => {
        event.preventDefault();
    
        const postObj = {
          title: event.target.elements.title.value,
          content: event.target.elements.content.value
        }
    
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`,
        };
        
        if (requestType === "post") {
          await axios.post("http://127.0.0.1:8000/posts/create/", postObj)

        }
    }


    onLabelChange = (e) => {
        this.setState({ title: e.target.value})
    }

    onContentChange = (e) => {
        this.setState({ content: e.target.value})
    }

<<<<<<< HEAD
    handleFile(e) {
        let file = e.target.files[0]
        this.setState({file: file})
=======
    addImage = (e) => {
        this.setState({ item: e.target.value})
>>>>>>> 050b8690c7f995e35ea5cc173c057da23400a957
    }

    onSubmit = (e) =>{
        e.preventDefault()
        // console.log(this.state.title, this.state.content)
    }

    componentDidMount = () =>  {
<<<<<<< HEAD
        this.setState({title: "fuck", content: "me", file: null})
=======
        this.setState({title: "this", content: "is"})
>>>>>>> 050b8690c7f995e35ea5cc173c057da23400a957
    } 

    render(){
        const title = this.state.title
        const content = this.state.content
        const file = this.state.file
        
        
        console.log(title)

        return(
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <DjangoCSRFToken />
                <input onChange={this.onLabelChange} type="text" name='title'/>
                <input onChange={this.onContentChange} type="content" name='content'/>
                
                <button onClick={() => this.props.addItem(title, content, file)}>Add content</button>
                <input onChange={(e) => this.handleFile(e)} type="file" name="file" />
            </form>
        )
    }
} 