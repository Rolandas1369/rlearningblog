import React from 'react'; 

import './description.css'



const Description = (props) => {
    
    
    let child = props.children
    console.log(child)
    return (
        <div className="description-item">
            {props.addHeader}
            {/* this way i am accepting children from component */}
            <p style={{color: props.children.textColor}}>{props.children.headerText}</p>
            
            <ul>
                <li>Learn something new and try it on this project does't mater if it makes looks ugly or useless at all in this project</li>
                <li>Add new features plan those you want to implement</li>
                <li>What i want to learn, next or ,learning</li>
            </ul>

        </div>
        
    )
}

export default Description;
