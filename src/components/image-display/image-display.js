import React, { Component } from 'react';

import './image-display.css'
import Image from 'react-image-resizer';

class ImageDisplay  extends Component {
    
    image = () => {
        
        const { item } = this.props
        if(item.image !== null) {
            let url = (item.image).slice(0, item.image.indexOf('?'))
            return (
                <a href={url} target="_blank" rel="noopener noreferrer">                         
                <Image
                    
                    src={url} 
                    height={200}
                    width={400}
                    alt="this is image"/>
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