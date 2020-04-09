import React, { Component } from 'react';

import './update-post-form.css';
import DataService from '../../services/data_service';

export default class UpdatePostForm extends Component { 

    dataService = new DataService()

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
        this.setState({title: "s"})
    }

    onFieldChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    addImage = (e) => {
        this.setState({ item: e.target.value})
    }
    
    x = () => {
        this.setState({
            title: ''
        })
    }

    componentDidMount = () =>  {
        this.dataService.getPost(185)
            .then((data) => this.setState({title: data.data.title, 
                                           content: data.data.content
                                        }))
    } 

    addBold = () => {
        this.setState({content: this.state.content + " [b] [/b]"})
    }

    addPreTag = () => {
        this.setState({content: this.state.content + " [pre] [/pre]"})
    }

    onOptionChange = (e) => {
        this.setState({lang_choice: e.target.value})
    }


    render(){

        return(
            <div className="add-post-div">
                <form className="add-post-form" onSubmit={(e) => this.handleFormSubmit(e)} encType="multipart/form-data">
                    <div className="tags-pallete">
                        <button className="bold-item" value={this.state.content} onClick={(e) => this.addBold(e)}>Bold</button>
                        <button className="pre-item" value={this.state.content} onClick={() => this.addPreTag()}>Pre</button>
                    </div>
                    <a href="/">Home</a>
                    <h2>Label for content</h2>
                    
                    <input className="form-input" onChange={(e) => this.onFieldChange(e)} type="text" name='title' value={this.state.title}/>
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

                    <button id="submit-button" className="submit-button" onClick={() => this.props.addItem(this.state.title, 
                                                                                    this.state.content, 
                                                                                    this.state.file, this.state.filename, 
                                                                                    this.state.gist_id, this.state.gist_filename, 
                                                                                    this.state.video_src, this.state.lang_choice)}
                                                                                 >Add post</button>
                    <input className="file-upload-button" onChange={(e) => this.handleFile(e)} type="file" name="file"/>
                </form>
            </div>
        )
    }
} 