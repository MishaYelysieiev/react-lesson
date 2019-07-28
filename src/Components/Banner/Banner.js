import React from 'react';
import PropTypes from 'prop-types'
import "./Banner.css"

function Banner(props) {
    return (
        <div className={props.class + " Banner"}>
            <p className="Banner-info">{props.info}</p>
        </div>

    )

}

Banner.propTypes = {
    info:PropTypes.string.isRequired
};

export default Banner;