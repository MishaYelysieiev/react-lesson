import React from 'react';
import {Field, reduxForm} from 'redux-form';

import './Form.css';

class Form extends React.Component {

    render() {

        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="username"
                    component="input"
                    type="text"
                    placeholder="Username"
                />
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="Password"
                />
                <button type="submit" label="submit">Submit</button>
            </form>

        )
    }

}

Form = reduxForm({
    form: 'login'
})(Form);

export default Form;