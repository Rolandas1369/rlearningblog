import React, { Component } from 'react';

import './gist-display.css'
import EmbeddedGist from '../embedded-gist';

class GistDisplay  extends Component {
    
    gist = () => {
        
        const { item } = this.props
        if(item.gist_id !== null) {
            return (                      
                <EmbeddedGist gist={item.gist_id} file={item.gist_filename}></EmbeddedGist> 
            )
    } else {
        return null;
    }
}
render() {

    const filteredGist = this.gist()

    return (
        <div className="filtered-gist">{filteredGist}</div>
    )
    }
}

export default GistDisplay;