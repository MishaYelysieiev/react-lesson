import React from 'react';

import "./Button.css";



function Button(props) {
    return(
        <button onClick={props.click} className="Button">{props.btnText}</button>
    )
}


export default Button;
