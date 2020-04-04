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
        let languageBackground = 'post-data'
        let classNamesh1 = ''
        
        const { item } = this.props
        
        if(this.state.blue){
            classNamesh1 += ' blue'
        }

        let delButton = null
        if(this.props.user){    
            delButton = <button onClick={this.props.onDeleted}>Delete Post</button>
        }

        switch(item.language_choice) {
            case "Python":
            languageBackground += ' blue-back'
              break;
            case "React":
            languageBackground += ' yellow-back'
              break;
            case "Both":
            languageBackground += ' default-back'
              break;
            default:
            languageBackground += ' default-back'
          } 

        return (
            <div className={languageBackground}>
                
                <div id={item.id}
                     className={classNamesh1} 
                     style={this.state.style} 
                     onClick={this.makeBlue}>
                     <h3>{item.id} {item.title}</h3> 

                </div>
                <div>
                    <div>{parser.toReact(item.content)}</div>            
                </div>
               
                <ImageDisplay item={item}/>
                <button>Expand gist</button>
                <GistDisplay item={item}/>
                <VideoDisplay item={item}/>

                
                <div>
                    {delButton}
                </div>
            </div>
        )
    }
}

