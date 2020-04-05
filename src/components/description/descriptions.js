import React from 'react'; 

import './description.css'

import FuturesList from '../futures-list.js';

const Description = (props) => {

    return (
        <div className="description-item">
            <h3>Things to remember doing this project</h3>
            <ul>
                <li>Learn something new and try it on this project does't mater if it makes looks ugly or useless at all in this project</li>
                <li>Add new features plan those you want to implement</li>
                <li>What i want to learn, next or ,learning</li>
            </ul>
            <div className="insights-item">
                <h4>Insights</h4>
                <p>Learning without usage in real project is hard, allways use real project</p>
            </div>
            <div className="features-item">
                <h4>Features/improvements to add to site</h4>
                <FuturesList getData={props.getData}/>
            </div>
        </div>
        
    )
}

export default Description;
