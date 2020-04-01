import React from 'react'; 

import './description.css'

const Description = () => {

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
                <ul>
                    <li>Insights crud list</li>
                    <li>Add Expand gist functionality</li>
                    <li>Add yellow background for js blue for python (see post 156)</li>
                    <li>Add filters for displaying only python, js or multiple</li>
                    <li>Sort items by date published (see post 155)</li>
                    <li>Pass login form to frontend</li>
                    <li>Inform, then post created</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Description;
