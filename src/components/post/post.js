import React, { Component } from 'react';

import Image from 'react-image-resizer';
import parser from 'bbcode-to-react';

import EmbeddedGist from '../Iframe';


import './post.css'


export default class Post extends Component {

    state = {
        blue: false,
        style: {color: ''},
        image_src: '',
        src: 'https://rlearning.s3.eu-north-1.amazonaws.com/media/first.html'
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

                
                <EmbeddedGist gist="Rolandas1369/62154d53b4d004faa138144cd5fc6372" file="gistfile1.txt"></EmbeddedGist>
                
                
                <div>


                


                    <p>{parser.toReact(item.content)}</p>            
                </div>
                <div>
                    {/* <button onClick={this.props.onDeleted}>Delete Post</button> */}
                </div>
            </div>
        )
    }
}

