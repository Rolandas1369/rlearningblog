import React, { Component } from 'react';

import Image from 'react-image-resizer';

import shot from '../../../src/media/one.png'

import './post.css'
export default class Post extends Component {

    state = {
        blue: false,
        style: {color: ''}
    }

    makeBlue = () => {
        this.setState({ blue: !this.state.blue})
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
                    <Image 
                        src={shot} 
                        height={200}
                        width={200}
                        alt="this is image"/>
                </div>
                <div>
                    <p>{item.content}</p>            
                </div>
                <div>
                    <button onClick={this.props.onDeleted}>Hello</button>
                </div>
            </div>
        )
    }
}
