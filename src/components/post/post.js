import React, { Component } from 'react';


import parser from 'bbcode-to-react';
import ImageDisplay from '../image-display';

import GistDisplay from '../gist-display';
import VideoDisplay from '../video-display';


import './post.css'


export default class Post extends Component {

    state = {
        blue: false,
        style: {color: ''},
        image_src: '',
    }

    makeBlue = () => {
        this.setState({ blue: !this.state.blue})
    }

    handleScriptLoad () {
        this.setState({ scriptLoaded: true })
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    render() {

        let classNames = ''

        if(this.state.blue){
            classNames += ' blue'
        }

        const { item } = this.props
        
        return (
            <div className="post-data">
                
                <div className={classNames} 
                     style={this.state.style} 
                     onClick={this.makeBlue}>
                     <h3>{item.title}</h3>   
                </div>
                <div>
                    <p>{parser.toReact(item.content)}</p>            
                </div>
                <ImageDisplay item={item}/>
                <GistDisplay item={item}/>
                <VideoDisplay item={item}/>
                
                
                
                
                <div>
                    {/* <button onClick={this.props.onDeleted}>Delete Post</button> */}
                </div>
            </div>
        )
    }
}

