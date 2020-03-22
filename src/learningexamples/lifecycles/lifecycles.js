import React, { Component } from 'react';

import './lifecycles.css';


export default class LifeCycle extends Component { 

    state = {
        catFacts: ''
    }

    getCatFacts = async () => {
        let response = await fetch('https://aws.random.cat/meow')
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            
            this.setState({catFacts: json.file})
          } else {
            alert("HTTP-Error: " + response.status);
          }
    }

    componentDidMount(){
        this.getCatFacts()
    }


render () {

    let cat = this.state.catFacts
    if (!cat) {
        return <p>loading cat</p>
    }
    
    return (
        <div>
            <img src={x}></img>
        </div>
    )
}

}