import React, { Component } from 'react';

import Image from 'react-image-resizer';
import parser from 'bbcode-to-react';



import './post.css'


export default class Post extends Component {

    state = {
        blue: false,
        style: {color: ''},
        image_src: ''
    }

    makeBlue = () => {
        this.setState({ blue: !this.state.blue})
    }

    return_content = () => {
        

        
    }


    render() {

        let classNames = ''

        const x = this.return_content

        if(this.state.blue){
            classNames += ' blue'
        }

        const { item } = this.props

        
        let url = (item.image).slice(0, item.image.indexOf('?'))

        
        return (
            <div className="post-data">
                <div className={classNames} 
                     style={this.state.style} 
                     onClick={this.makeBlue}>
                     <h3>{item.title}</h3>
                                    
                    <Image 
                        src={url} 
                        height={400}
                        width={400}
                        alt="this is image"/>
                </div>
                <iframe id="ifrm" src="https://gist.github.com/Rolandas1369/1f93d4682a27442dea50e3ed0bfbe5d5.js"></iframe>
                
                <div>
                    <p>{parser.toReact(item.content)}</p>            
                </div>
                <div>
                    <button onClick={this.props.onDeleted}>Delete Post</button>
                </div>
            </div>
        )
    }
}
