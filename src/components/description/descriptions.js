import React from 'react'; 

import './description.css'



const Description = (props) => {
    
    return (
        <div className="description-item">
            {props.addHeader}
            {/* this way i am accepting children from component */}
            <p style={{color: props.children[0].textColor}}>{props.children[0].headerText}</p>
            
            <ul>
                {React.Children.map(props.children, (child, idx) => {
                    return <div>{child}</div>
                })}
            </ul>

        </div>
        
    )
}

export default Description;
