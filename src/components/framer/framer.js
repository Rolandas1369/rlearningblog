import React, { Component } from 'react';
import DataService from '../../services/data_service';

import './framer.css';

export default class Framer extends Component {
    render(){
        return(
            <div >
                <iframe className="border-solid border-4 border-gray-600" allowfullscreen="true" title="google" src="https://rlearning.s3.eu-north-1.amazonaws.com/media/index.html"></iframe>
            </div>
        )
    }
}