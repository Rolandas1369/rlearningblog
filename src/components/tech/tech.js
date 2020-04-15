import React, { Component } from 'react';

import DataService from '../../services/data_service';

import './output.css'

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
                    
                    <div>Progamming expierence</div>
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
                    </div>
                    <div className="job-entry">
                        <div>2019-2020</div>
                        <div>Facebook groups scraper</div>
                        <div>Writen python FB scraper for client. Used fbcrawl what uses 
                            scrapy package to achieve results, had to fix some bugs in unmaintained 
                            source code for script work properly.</div>
                    </div>
                    <div className="job-entry">
                        <div>2019-2020</div>
                        <div>Jira data analysis</div>
                        <div>Used Jiras API to retrieve and store date into postgresql database,
                            data was aggregated calculated and evaluted, then was displayed to Django
                            API.
                        </div>
                    </div>
                    <div className="job-entry">
                        <div>2019-2020</div>
                        <div>Competed in Kagles(data science platform) competitions</div>
                        <div>Used sklearn, xgboost tools to solve this competition <a href="https://github.com/Rolandas1369/Santander-Competition-Kernels">competition files</a></div>
                    </div>
                    <div className="job-entry">
                        <div>2019-2020</div>
                        <div>Python script for creating and uploading videos from text. <a href="https://www.youtube.com/channel/UC1PclTMbcB0TsbjAH-3Q9NA">view on youtube</a></div>
                        <div></div>
                    </div>

                    <div>Job expierence</div>
                    <div className="job-entry">
                        <div >2005 - Present</div>
                        <div>Working as a contractor in construction. Mostly building stairs for residental and comercial places.</div>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }

}