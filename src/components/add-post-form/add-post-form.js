import React, { Component } from 'react';

import './add-post-form.css';

export default class AddPostForm extends Component { 

    state = {
        title: '',
        content: '',
        file: null,
        filename: '',
        gist_id: '',
        gist_filename: '',
        video_src:'',
        lang_choice: 'Both' // Set default language choice to be Both
    }

    handleFile = (e) => {
        let file = e.target.files[0]
        this.setState({file: file, filename: file.name})
    }

    handleFormSubmit = async (event) => {
        event.preventDefault()
    }

    onFieldChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
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

    onOptionChange = (e) => {
        this.setState({lang_choice: e.target.value})
    }


    render(){
        const {title, content, file, filename,
               gist_id, gist_filename, video_src, 
               lang_choice} = this.state

        
        return(
            <div className="add-post-div">
                
                <form className="add-post-form" onSubmit={(e) => this.handleFormSubmit(e)} encType="multipart/form-data">

                    <button className="bold-item" value={this.state.content} onClick={(e) => this.addBold(e)}>Bold</button>
                    <a href="/">Home</a>
                    <h2>Label for content</h2>
                    
                    <input className="form-input" onChange={(e) => this.onFieldChange(e)} type="text" name='title'/>
                    <h3>Content</h3>
                    <textarea onChange={this.onFieldChange} type="text" name='content' value={this.state.content}></textarea>
                    <h3>Gist id</h3>
                    <input className="gist-input" onChange={(e) => this.onFieldChange(e)} type="text" name='gist_id'/>
                    <h3>Gist file name</h3>
                    <input className="gist-filename-input" onChange={(e) => this.onFieldChange(e)} type="text" name='gist_filename'/>
                    <h3>Video ID</h3>
                    <input className="video-src-input" onChange={(e) => this.onFieldChange(e)} type="text" name='video_src'/>
                    <h3>Select language</h3>
                    <select name="lang_choice" onChange={(e) => this.onFieldChange(e)}>
                        <option>---</option>
                        <option>Python</option>
                        <option>React</option>
                        <option>Both</option>
                    </select>

                    <button id="submit-button" onClick={() => this.props.addItem(title, content, 
                                                                                 file, filename, 
                                                                                 gist_id, gist_filename, 
                                                                                 video_src, lang_choice)}
                                                                                 >Add post</button>
                    <input className="file-upload-button" onChange={(e) => this.handleFile(e)} type="file" name="file"/>
                </form>
            </div>
        )
    }
} 