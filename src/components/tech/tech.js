import React, { Component } from 'react';

import DataService from '../../services/data_service';

import './output.css'

export default class App extends Component {

    state = {
        stack: "",
        skills: "",
        workexperiece: ""
    }

    dataService =  new DataService()
    

    componentDidMount(){
        this.dataService.getStack()
        .then((data) => this.setState({stack: data.data}))
        this.dataService.getSkills()
        .then((data) => this.setState({skills: data.data}))
        this.dataService.getWorkExpierience()
        .then((data) => this.setState({workexperiece: data.data}))
    }

    createDisplay = () => {
        let { stack } = this.state
        let stackArray = [...stack]
        return stackArray.map((st) =>  <div key={st.id} className=".stack-element">{st.language}</div>)
    }

    createExp = () => {
        let { workexperiece } = this.state
        let workArray = [...workexperiece]
        
        return workArray.map((wrk) => {
            console.log(wrk.links)
            return (
                <div className="flex-full p-1 ">
                    <div className="w-full bg-gray-500 h-12">{wrk.worked_from}</div>
                    <div className="w-full bg-gray-500 pl-3">{wrk.description}</div>
                    <div className="w-full bg-gray-500 pl-3">{wrk.skills_used}</div>
                    <div className="w-full bg-gray-500 pl-3">
                        {wrk.links ?  <a className="text-blue-500 hover:text-blue-800" href={wrk.links}
                            rel="noopener noreferrer" 
                            target="_blank">Visit proect</a> : null}
                    </div>
                </div>
            )
        })
    }

    render(){

        let display = this.createDisplay()
        let workexperiece = this.createExp()
        console.log("tech", this.state.stack, "skills", this.state.skills)
        return (
            
            <div className="stack-main">
                <div className="flex mb-4">
                    <div className="w-1/2 bg-gray-400">
                        <h1>Rolandas Butkevičius</h1>
                    </div>
                    <div className="w-1/2 bg-gray-400">
                        <h3>Software developer</h3>
                        <div>Email: rolandaswb@gmail.com</div>
                        <div>Skype: rolandaswb@gmail.com</div>
                        <div>LinkedIn: <a className="text-blue-500 hover:text-blue-800" href="https://www.linkedin.com/in/rolandas-butkevi%C4%8Dius-4a8471106/">View LinkedIn Profile</a></div>
                        <div>GitHub: <a className="text-blue-500 hover:text-blue-800" href="https://github.com/Rolandas1369">View Github Page</a></div>
                    </div>
                </div>
                
                
                <div className="flex mb-4">
                    <div className="w-full bg-gray-500">
                        <h4>Progamming languages what I use or had experience with</h4>
                        {display}
                    </div>
                </div>
                <div className="work-experience">
                    { workexperiece }
                    {/* <div>Progamming expierence</div>
                    <div className="flex mb-4">
                        <div className="w-full bg-gray-500">
                            <div className="none">2018</div>
                            <div className="none">Completed Wordpress website <a href="https://grinduklojimas.lt">grinduklojimas</a></div>
                            <div className="none">Did this project using PHP and wordpress, deployed to server made https protocol available, guided/designed project design.</div>
                        </div>
                    </div>
                    <div className="job-entry">
                        <div>2018-2019</div>
                        <div>Had some minor jobs with fixing Wordpress websites</div>
                    </div> */}
                </div>
            </div>
        )
    }

}