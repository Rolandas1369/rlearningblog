import React, { Component } from 'react';

import Image from 'react-image-resizer';

import img from '../../../src/media/one.png';

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


    render() {

        let classNames = ''

        if(this.state.blue){
            classNames += ' blue'
        }

        const { item } = this.props
        
        

        const path = '/media/'+ item.filename

        //console.log("path is", path)
        
        return (
            <div className="post-data">
                <div className={classNames} 
                     style={this.state.style} 
                     onClick={this.makeBlue}>
                     <h3>{item.title}</h3>
                    <p>{item.image}</p>
                    

                    
                    <Image 
                        src="https://rlearningblog.herokuapp.com/static/media/one.7b3b826c.png" 
                        height={200}
                        width={200}
                        alt="this is image"/>
                </div>
                <div>
                    <p>{item.content}</p>            
                </div>
                <div>
                    <button onClick={this.props.onDeleted}>Delete Post</button>
                </div>
            </div>
        )
    }
}
