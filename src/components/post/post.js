import React, { Component } from 'react';

import './post.css'
export default class Post extends Component {

    state = {
        blue: false,
        style: {color: ''}
    }

    addRed = () => {
        this.setState({style: { color:'red'}})
    }

    makeBlue = () => {
        this.setState({ blue: !this.state.blue})
    }

    selectWord = (item) => {
        console.log("props")
    }

    render() {

        let classNames = ''

        if(this.state.blue){
            classNames += ' blue'
        }

        const { item } = this.props
        console.log(item)
        return (
            <div className="post-data">
                <div className={classNames} 
                    style={this.state.style} 
                    onClick={this.makeBlue}>
                    <h3>{item.title}</h3>
                </div>
                
                <div>
                    <p>{item.content}</p>            
                </div>
                <div>
                    <button>Hello</button>
                </div>
                   
                 
            </div>
        )
    }
}
