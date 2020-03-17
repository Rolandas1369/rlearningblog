import React, { Component } from 'react';

import Image from 'react-image-resizer';
import parser from 'bbcode-to-react';

import './post.css'

import load from 'little-loader';






export default class Post extends Component {

    state = {
        blue: false,
        style: {color: ''},
        image_src: '',
        scriptLoaded: false,
        status: 'start'
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
        let url = (item.image).slice(0, item.image.indexOf('?'))

        return (
            <div className="post-data">
                <div className={classNames} 
                     style={this.state.style} 
                     onClick={this.makeBlue}>
                     <h3>{item.title}</h3>                             
                    <Image 
                        src={url} 
                        height={200}
                        width={400}
                        alt="this is image"/>    
                </div>     
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

