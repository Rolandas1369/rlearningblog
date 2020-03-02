import React, { Component } from 'react';

export default class Blog extends Component {

    state = {
        color: ''
    }

    addRed = () => {
        this.setState({ color:'red'})
    }

    render() {

        

        const { item } = this.props
        console.log(item)
        return (
            <div>
                <p style={this.state.style} onClick={this.addRed}>{item.title}</p>
                <p>{item.content}</p>     
            </div>
        )
    }
}