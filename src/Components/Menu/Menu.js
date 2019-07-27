import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.css';



function Menu(props) {
    console.log(props.list);
    const list = props.list.map((item)=>{
        return <Link className="Menu-link" to={item.href}>{item.name}</Link>
    });
    return (
        <div className="Menu">
            {list}
        </div>
    )

}

export default Menu;
