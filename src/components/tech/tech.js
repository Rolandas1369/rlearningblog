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
                <div key={Math.random()} className="flex work-exp border-t-2">                   
                       

                            <div className="exp-text">
                                <div className="w-full h-12 pt-1">{wrk.worked_from}</div>
                                <div className="w-full pt-1">{wrk.description}</div>
                                <div className="w-full mt-1 pt-1 mt-3 mb-3">
 
                                    {helpers.length > 1 ? <p className="pb-3">In this project I used:</p> : null}
                                    <div className="description-image">
                                        {helpers.length > 1 ? helpers.map((helper) => <div key={Math.random()} className="skill-span bg-teal-500 p-2 mr-3 mt-4 mb-4"> {helper}</div>) : null}
                                    </div>
                                </div>
                                <div className="w-full pt-3 pb-3">
                                    {wrk.links ?  <a className="project-links bg-teal-500 text-yellow-500 hover:text-blue-800 mt-2 mb-5" href={wrk.links}
                                        rel="noopener noreferrer" 
                                        target="_blank">Visit project</a> : null}
                                </div>
                            </div>

                            <ImageDispl image={wrk.image}/>
        
                </div>
            )
        })
    }

    render(){

        let workexperiece = this.createExp()
        return (     
            <div className="w-full pr-10 pl-10 pb-10">

                <div className="flex">
                    <div className="name-header pt-10">
                        <h1 className="text-5xl">Rolandas Butkevičius</h1>
                        <h2 className="text-center border-b-2 mr-10 ml-10">Web developer harnessing python and javascript technologies</h2>
                    </div>
                    <div className="contacts-header pt-5">
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
                    
                <div className="top flex w-full ">
                    <div className="workflow pt-5">
                        <h3 className="font-bold">When I code</h3>
                        <ul className="pt-6">
                            <li>I use <b>Linux</b> as working OS. </li>
                            <li><b>Git</b>hub my most used platform for code sharing</li>
                            <li><b>Python</b> with <b>Django</b> for building backend</li>
                            <li><b>JavaScript</b> with <b>React</b> for building frontend</li>
                            <li><b>Docker</b> for adding services to virtual machine</li>
                            <li>Testing for runing code with less bugs</li>
                        </ul>
                    </div>
                    <div className="languages pt-5">
                        <h3 className="font-bold">Languages I can communicate with</h3>
                        <ul className="pt-6">
                            <li>Russian</li>
                            <li>English</li>
                            <li>Lithuanian</li>
                        </ul>
                    </div>
                </div>

                <div className="work-experience">
                    <h3 className="text-4xl pt-5">Programming / Work History</h3>
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
                <div className="portolio-image pt-2 pb-2">
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