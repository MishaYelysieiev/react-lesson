import React from 'react';

import "./Banner.css"

function Banner(props) {
    return (
        <div className={props.class + " Banner"}>
            <p className="Banner-info">{props.info}</p>
        </div>

    )

}

export default Banner;