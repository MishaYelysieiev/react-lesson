import React from 'react';
import PropTypes from 'prop-types'


import Button from '../Buttons/Button';

import "./Subheader.css";


class Subheader extends React.Component {

    static defaultProps = {
      btnText:'Default Title'
    };

    static propTypes={
        btnText:PropTypes.string
    };

    render() {
        return (
            <div className="Subheader">
                <h3 className="Subheader-heading">{this.props.title}</h3>
                <Button click={this.props.click} btnText={this.props.btnText}/>
            </div>
        )
    }


}

export default Subheader;