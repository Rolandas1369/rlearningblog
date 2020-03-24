import React, { Component } from 'react';

import './lifecycles.css';

export default class LifeCycle extends Component { 

    state = {
        catFacts: ''
    }

    // function to retriev info from api
    // must be async function to fetch work properly
    getCatFacts = async () => {
        let response = await fetch('https://aws.random.cat/meow')
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            this.setState({catFacts: json.file})
            console.log("Cat is loaded")
          } else {
            alert("HTTP-Error: " + response.status);
          }
    }

    // Method if fired then component is created
    componentDidMount(){
        console.log("Mounting")
        this.getCatFacts()
        console.log("After function call")
    }


    render () {

        let cat = this.state.catFacts
        if (!cat) {
            return <p>loading cat</p>
        }
        
        return (
            <div>
                <img width="400" height="400" src={cat} alt="cat" />
            </div>
        )
    }

}