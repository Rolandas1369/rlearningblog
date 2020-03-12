import React, { Component } from 'react';

import Image from 'react-image-resizer';


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
        
        // let idx = 0;
        // let name = ''

        // if (item.image !== null) {
        //      idx = (item.image).search(/(?=[^/]*$)/)
        //      name = (item.image).slice(idx)
        // }

        
        
        

        

        // let src = '';
        
        // if (idx > 0) {
        //     src = "https://rlearningblog.herokuapp.com/static/media/" + name
        // }
        // else {
        //     src = "https://rlearningblog.herokuapp.com/static/media/one.7b3b826c.png"
        // }

        console.log("strt", item.image)
        let url = (item.image).slice(0, item.image.indexOf('?'))
        let src = 'media/' + item.filename

        
        return (
            <div className="post-data">
                <div className={classNames} 
                     style={this.state.style} 
                     onClick={this.makeBlue}>
                     <h3>{item.title}</h3>
                    <p>{item.image}</p>
                    
                    

                    
                    <Image 
                        src={url} 
                        height={400}
                        width={400}
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
