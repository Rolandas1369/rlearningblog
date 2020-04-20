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
        return stackArray.map((st) =>  
                                <div key={st.id} 
                                     className=".stack-element">
                                    {st.language}
                                </div>)
    }

    createExp = () => {
        let { workexperiece } = this.state
        const workArray = [...workexperiece]
        const workArraySorted = workArray.sort((a,b) => (b.worked_from).substring(0,4) - (a.worked_from).substring(0,4))
        return workArraySorted.map((wrk) => {
            let helpers = (wrk.skills_used).split(',')        
            return (
                <div key={Math.random()} className="flex-full p-1">
                    
                    <div className="fonter">
                        <div className="left w-full border-t-2">
                            <div className="w-5/6">
                                <div className="w-full h-12 pt-1">{wrk.worked_from}</div>
                                <div className="w-full pl-3 pt-1">{wrk.description}</div>
                                <div className="w-full pl-3 mt-1 pt-1 mt-3 mb-3">
 
                                    {helpers.length > 1 ? <p className="pb-3">In this project I used:</p> : null}
                                    <div className="flex-col">
                                        {helpers.length > 1 ? helpers.map((helper) => <span key={Math.random()} className="skill-span bg-teal-500 mr-3 pr-1 p-1"> {helper}</span>) : null}
                                    </div>
                                </div>
                                <div className="w-full pl-3 pt-3 pb-3">
                                    {wrk.links ?  <a className="project-links bg-teal-500 text-yellow-500 hover:text-blue-800" href={wrk.links}
                                        rel="noopener noreferrer" 
                                        target="_blank">Visit project</a> : null}
                                </div>
                            </div>
                            <ImageDispl image={wrk.image}/>
                        </div>      
                    </div>
                </div>
            )
        })
    }

    render(){

        let workexperiece = this.createExp()
        return (     
            <div className="w-full p-10">
                <div className="flex">
                    <div className="name-header w-1/2">
                        <h1 className="text-5xl">Rolandas Butkevičius</h1>
                        <h2 className="text-center">Web developer harnessing python and javascript technologies</h2>
                    </div>
                    <div className="contacts-header w-1/2">
                        <div><i className="fa fa-envelope"></i><a href="mailto:rolandaswb@gmail.com">rolandaswb@gmail.com</a></div>
                        <div><i className="fab fa-skype"></i>rolandaswb@gmail.com</div>
                        <div><i className="fab fa-linkedin"></i>
                            <a className="text-blue-500 hover:text-blue-800" 
                               href="https://www.linkedin.com/in/rolandas-butkevi%C4%8Dius-4a8471106/">
                                LinkedIn
                            </a>
                        </div>
                        <div><i className="fab fa-github"></i>
                            <a className="text-blue-500 hover:text-blue-800" 
                               href="https://github.com/Rolandas1369">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                
                
                    <div className="top w-full mt-20">
                        <div className="workflow">
                            <h4>When I code</h4>
                            <ul className="pl-5 pt-6">
                                <li>I use <b>Linux</b> as working OS. </li>
                                <li><b>Git</b>hub my most used platform for code sharing</li>
                                <li><b>Python</b> with <b>Django</b> for building backend</li>
                                <li><b>JavaScript</b> with <b>React</b> for building frontend</li>
                                <li><b>Docker</b> for adding services to virtual machine</li>
                                <li>Testing for runing code with less bugs</li>
                            </ul>
                        </div>
                        <div className="languages border-l-2">
                            <h4>Languages I can communicate with</h4>
                            <ul className="pl-5 pt-6">
                                <li>Russian</li>
                                <li>English</li>
                                <li>Lithuanian</li>
                            </ul>
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

const ImageDispl = (props) => {

        let url = ""
        if(props.image !== null) {
            url = (props.image).slice(0, props.image.indexOf('?'))
            return (
                <div className="portolio-image">
                    <a href={url} target="_blank" rel="noopener noreferrer">                         
                    <img     
                        src={url} 
                        height={200}
                        width={400}
                        alt="porfolio item"/>
                    </a>
                </div>  
            )
        } else {
            return null;
        }
    

}