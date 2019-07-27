import React from "react";
import {Link} from 'react-router-dom'

import './Logo.css'

function Logo(props){
    return <Link to="/" className="Logo">{props.title}</Link>
}

export default Logo