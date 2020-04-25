import React, { Component } from 'react';
import DataService from '../../services/data_service';

import './framer.css';

export default class Framer extends Component {

    dataService = new DataService()

    state = {
        last: null
    }

    componentDidMount(){
        this.dataService.getLastHtml()
        .then((data) => {
            this.setState({ last: data.data})})
    }

    render(){

        let ok ="s"
        if (this.state.last) {
            let item = this.state.last
            let url = (item.html_file).slice(0, item.html_file.indexOf('?'))
            console.log(url)
            ok = (<iframe className="border-solid border-4 border-gray-600" title="google" src={url}></iframe>)
        }
        
        return(
            <div >
                {ok}
            </div>
        )
    }
}