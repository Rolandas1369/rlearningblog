import React, { Component } from 'react';

import DataService from '../../services/data_service';


import './output.css'
import './tech.css'


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
        let workArraySorted = workArray.sort((a,b) => b.worked_from - a.worked_from)
        
        return workArraySorted.map((wrk) => {
            console.log(wrk.links)
            let helpers = (wrk.skills_used).split(',')
            
            return (
                
                <div className="flex-full p-1 fonter">
                    <hr class="style1"/>
                    <div className="w-full h-12 pt-1">{wrk.worked_from}</div>
                    <div className="w-full pl-3 pt-1">{wrk.description}</div>
                    <div className="w-full pl-3 pt-1">
                        <p className="">What i used in this project:</p>
                        
                        {helpers.map((helper) => <span className="bg-teal-500 mr-3 p-1">{helper}</span>)}
                        
                    </div>
                    <div className="w-full pl-3 pt-3 pb-3">
                        {wrk.links ?  <a className="bg-teal-500 text-yellow-500 hover:text-blue-800" href={wrk.links}
                            rel="noopener noreferrer" 
                            target="_blank">Visit project</a> : null}
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
            
            <div className="stack-main w-full pt-10">
                <div className="flex">
                    <div className="tech-right">
                        <h1 className="text-5xl">Rolandas Butkevičius</h1>
                        <p className="text-center">Python / JavaScript</p>
                        
                    </div>
                    <div className="tech-left pl-10">
                        <div><i class="fa fa-envelope"></i>: <a href="mailto:rolandaswb@gmail.com">rolandaswb@gmail.com</a></div>
                        
                        <div><i class="fab fa-skype"></i>: rolandaswb@gmail.com</div>
                        <div><i class="fab fa-linkedin"></i>: <a className="text-blue-500 hover:text-blue-800" href="https://www.linkedin.com/in/rolandas-butkevi%C4%8Dius-4a8471106/">LinkedIn</a></div>
                        <div><i class="fab fa-github"></i>: <a className="text-blue-500 hover:text-blue-800" href="https://github.com/Rolandas1369">Github</a></div>
                    </div>
                </div>
                
                
                <div className="flex mb-4">
                    <div className="w-full mt-20">
                        <h4>Progamming languages what I use or had experience with</h4>
                        <div className="pl-5">{display}</div>
                    </div>
                </div>
                <div className="work-experience">
                    <h3 className="text-4xl"> Programming / Work History</h3>
                    { workexperiece }
                </div>
            </div>
        )
    }

}