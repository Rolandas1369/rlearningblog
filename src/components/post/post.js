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
        image_src: ''
    }

    makeBlue = () => {
        this.setState({ blue: !this.state.blue})
    }

    // returnGist = () => {
    //    return( <style dangerouslySetInnerHTML={{__html: `
    //              .gist-data { height: ${this.state.gistHeight};}
    //         `}} />
    //    )
    // }

    expandGist = (e) => {
        
        console.log()
        let x = document.getElementById(e.target.id)
            .nextSibling
            .children[0]
            .children[0]
            .children[0]
            .children[0]              
            .setAttribute('style', 'height: auto;');
    }

    updatePage = (id) => {
        console.log('page id', id)
        window.location = `/update/${id}`;
    }

    render() {
        let languageBackground = 'post-data'
        let classNamesh1 = ''

        //let styleComputed = this.returnGist()
        
        
        const { item } = this.props
        
        if(this.state.blue){
            classNamesh1 += ' blue'
        }

        let delButton = null
        let updButton = null
        if(this.props.user){    
            delButton = <button onClick={this.props.onDeleted}>Delete Post</button>
            updButton = <button onClick={() => this.updatePage(item.id)}>Update</button>
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
                {/* I think is only inicializing one time, and next render rewrites hight to 50px
                {styleComputed}  */}
                
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
                <button id={`${item.id}ix`} onClick={(e) => this.expandGist(e)}>Expand gist</button>
                <GistDisplay item={item}/>
                <VideoDisplay item={item}/>

                
                <div>
                    {delButton}
                    {updButton}
                </div>
            </div>
        )
    }
}

