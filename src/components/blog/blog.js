import React, { Component } from 'react';

export default class Blog extends Component {

    render() {

        const { item } = this.props
        return (
            <div>
                <p>{item.title}</p>
                <p>{item.content}</p>     
            </div>
        )
    }
}