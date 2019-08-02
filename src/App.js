import React from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import {reducer as formReducer} from 'redux-form';

import Header from './Components/Header/Header';
import Subheader from "./Components/Subheader/Subheader";
import Banner from "./Components/Banner/Banner";
import BannerMountain from "./Components/Banner/Banner-mountain";
import BannerOcean from "./Components/Banner/Banner-ocen";
import BannerForest from "./Components/Banner/Banner-forest";
import Button from "./Components/Buttons/Button";
<<<<<<< HEAD
import Form from "./Components/Form/Form";
=======
import LoginForm from './Components/Form/LoginForm'
>>>>>>> 2d5dc8bd8753c92608093dccf8565318005fb9a5

import {setName, setPassword, requestPassword} from "./Actions/SubheaderActions";


import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnText: "New text"
        };
    }

    setNewBtnText = function (newTitle) {
        this.setState({btnText: newTitle})
    };
<<<<<<< HEAD
    createNewPass = function (newTitle) {
        return parseInt(Math.random() * (999999 - 100000) + 100000)
=======
    createNewPass = function () {
        return parseInt(Math.random() * (999999-100000)+100000)
>>>>>>> 2d5dc8bd8753c92608093dccf8565318005fb9a5
    };

    componentDidMount() {
        this.setNewBtnText();
    }

    render() {
        const reducers = {form: formReducer};
        const {user, banner} = this.props;


        return (
            <main className="App">
                <Header/>
                <Route path='/mountain' component={BannerMountain}/>
                <Route path='/ocean' component={BannerOcean}/>
                <Route path='/forest' component={BannerForest}/>
                <Banner class='Banner-default' info={banner.info}/>
                <Subheader
                    title={`Your name is "${user.name}", your pass is "${user.password}" and you are an "${user.type}"`}
                    click={() => {
                        this.props.setNameAction('New Title')
                    }}
                    btnText={this.state.btnText}/>
                <Button click={
                    () => {
                        this.props.setPasswordAction()
                    }}
                        btnText="Get SW Password"/>
                <Button click={
                    () => {
                        this.props.setRandomPasswordAction(this.createNewPass())
                    }}
                        btnText="Get Random Password"/>
<<<<<<< HEAD
                <h1>REDUX FORM</h1>
                <Form onSubmit={this.submit}/>
=======
                <h1>Redux Form</h1>
                <LoginForm
                    onSubmit={this.submit}
                    initialValues={this.getInitialValues()}
                />
>>>>>>> 2d5dc8bd8753c92608093dccf8565318005fb9a5

            </main>
        );

    }

    submit(value){
        console.log(JSON.stringify(value));
    }

    submit(values) {
        window.alert (JSON.stringify (values));
    };

    getInitialValues() {
        return {
            username: 'Chubaka',
            password: ''
        }
    };
}

const mapStateToProps = function (store) {
    return {
        user: store.user.client,
        banner: store.banner.banner
    }

};
const mapDispatchToProps = function (dispatch) {
    return {
        setNameAction: (name) => dispatch(setName(name)),
        setPasswordAction: () => dispatch(requestPassword()),
        setRandomPasswordAction: (password) => dispatch(setPassword(password))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
