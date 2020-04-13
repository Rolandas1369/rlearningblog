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
                <h4>Progamming languages what i use or had experience with them</h4>
                {display}
                </div>
                <div className="work-experience">
                    
                    <div>Progamming expierence</div>
                    <div className="job-entry">
                        <div>2018</div>
                        <div>Completed Wordpress website <a href="https://grinduklojimas.lt">grinduklojimas</a></div>
                        <div>Did this project using PHP and wordpress, deployed to server made https protocol available, guided/designed project design.</div>
                    </div>
                    <div className="job-entry">
                        <div>2018-2019</div>
                        <div>Had some minor jobs with fixing Wordpress websites</div>
                    </div>
                    <div className="job-entry">
                        <div>2018-2019</div>
                        <div>Facebook groups scraper</div>
                        <div>Writen python FB scraper for client. Used fbcrawl what uses 
                            scrapy package to achieve results, had to fix some bugs in unmaintained 
                            source code for script work properly.</div>
                    </div>
                    <div className="job-entry">
                        <div>2018-2019</div>
                        <div>Jira data analysis</div>
                        <div>Used Jiras API to retrieve and store date into postgresql database,
                            data was aggregated calculated and evaluted, then was displayed to Django
                            API.
                        </div>
                    </div>
                    <div className="job-entry">
                        <div>2018-2019</div>
                        <div>Competed in Kagles(data science platform) competitions</div>
                        <div>Used sklearn, xgboost tools to solve this competition <a href="https://github.com/Rolandas1369/Santander-Competition-Kernels">Competition files</a></div>
                    </div>
                </div>
            </div>
        )
    }

}