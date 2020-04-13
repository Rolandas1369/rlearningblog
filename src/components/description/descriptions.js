import React from 'react'; 

import './description.css'



const Description = (props) => {
    let newItem = "Need a plan for inplementation"
    return (
        <div className="description-item">
            {props.addHeader}
            {/* this way i am accepting children from component */}
            <p style={{color: props.children[0].textColor}}>{props.children[0].headerText}</p>
            
            <ul>
                {React.Children.map(props.children, (child, idx) => {
                    return React.cloneElement(child, {newItem});
                })}
            </ul>

        </div>
        
    )
}

export default Description;
