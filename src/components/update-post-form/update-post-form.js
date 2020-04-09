import React, { Component } from 'react';

import './update-post-form.css';
import DataService from '../../services/data_service';

export default class UpdatePostForm extends Component { 

    dataService = new DataService()

    state = {
        
        title: '',
        content: '',
        file: '',
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
    
    x = () => {
        this.setState({
            title: ''
        })
    }

    componentDidMount = () =>  {

        
        this.dataService.getPost(40)
            .then((data) => this.setState({title: data.data.title, 
                                           content: data.data.content,
                                           file: data.data.file,
                                           filename: data.data.filename,
                                           gist_id: data.data.gist_id,
                                           gist_filename: data.data.filename,
                                           video_src: data.data.video_src,
                                           lang_choice: data.data.lang_choice

                                        }) )
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
                    <input className="gist-input" onChange={(e) => this.onFieldChange(e)} type="text" name='gist_id' value={this.state.gist_id}/>
                    <h3>Gist file name</h3>
                    <input className="gist-filename-input" onChange={(e) => this.onFieldChange(e)} type="text" name='gist_filename'/>
                    <h3>Video ID</h3>
                    <input className="video-src-input" onChange={(e) => this.onFieldChange(e)} type="text" name='video_src' value={this.state.video_src}/>
                    <h3>Select language</h3>
                    <select name="lang_choice" onChange={(e) => this.onFieldChange(e) } value={this.state.lang_choice}>
                        <option>---</option>
                        <option>Python</option>
                        <option>React</option>
                        <option>Both</option>
                    </select>

                    {/* <button id="submit-button" className="submit-button" onClick={() => this.props.addItem(title, content, 
                                                                                 file, filename, 
                                                                                 gist_id, gist_filename, 
                                                                                 video_src, lang_choice)}
                                                                                 >Add post</button> */}
                    <input className="file-upload-button" onChange={(e) => this.handleFile(e)} type="file" name="file"/>
                </form>
            </div>
        )
    }
} 