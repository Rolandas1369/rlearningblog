import React, { Component } from 'react';

import DataService from '../../services/data_service';

import './tech.css'

export default class App extends Component {

    state = {
        stack: "",
        skills: ""
    }

    dataService =  new DataService()
    

    componentDidMount(){
        this.dataService.getStack()
        .then((data) => this.setState({stack: data.data}))
        this.dataService.getSkills()
        .then((data) => this.setState({skills: data.data}))
    }

    createDisplay = () => {
        let { stack } = this.state
        let stackArray = [...stack]
        return stackArray.map((st) =>  <div key={st.id} className=".stack-element">{st.language}</div>)
    }


    render(){

        let display = this.createDisplay()

        console.log("tech", this.state.stack, "skills", this.state.skills)
        return (
            
            <div className="stack-main">
                <div className="top-wrapper">
                    <div className="left-corner">
                        <h1>Rolandas</h1>
                    </div>
                    <div className="right-corner">
                        <h3>Software developer</h3>
                        <div>Email: rolandaswb@gmail.com</div>
                        <div>Skype: rolandaswb@gmail.com</div>
                        <div>LinkedIn: <a href="https://www.linkedin.com/in/rolandas-butkevi%C4%8Dius-4a8471106/">View LinkedIn Profile</a></div>
                        <div>GitHub: <a href="https://github.com/Rolandas1369">View Github Page</a></div>
                    </div>
                </div>
                
                
                <div className="stack-div">
                <h3>Stack</h3>
                {display}
                </div>
                <div className="work-experience">
                    <p>Wokr</p>
                </div>
            </div>
        )
    }

}