import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.css';



function Menu(props) {
    const list = props.list.map((item, index)=>{
        return <Link key={item.name + index} className="Menu-link" to={item.href}>{item.name}</Link>
    });
    return (
        <div className="Menu">
            {list}
        </div>
    )

}

export default Menu;
