import React, { Component } from 'react';

import './image-display.css'


class ImageDisplay  extends Component {
    
    image = () => {
        
        const { item } = this.props
        if(item.image !== null) {
            let url = (item.image).slice(0, item.image.indexOf('?'))
            return (
                <a href={url} target="_blank" rel="noopener noreferrer">                         
                <img className="image-display"
                    src={url} 
                    alt="this is egzample"/>
                </a>  
            )
    } else {
        return null;
    }
}
render() {

    const filteredImage = this.image()

    return (
        <div className="filtered-image">{filteredImage}</div>
    )
    }
}

export default ImageDisplay;