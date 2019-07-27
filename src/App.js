import React from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';

import Header from './Components/Header/Header';
import Subheader from "./Components/Subheader/Subheader";
import Banner from "./Components/Banner/Banner";
import BannerMountain from "./Components/Banner/Banner-mountain";
import BannerOcean from "./Components/Banner/Banner-ocen";
import BannerForest from "./Components/Banner/Banner-forest";

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

    componentDidMount() {
        this.setNewBtnText();
    }

    render() {

        const {user, banner} = this.props;

        return (
            <main>
                <Header/>
                <Route path='/mountain' component={BannerMountain}/>
                <Route path='/ocean' component={BannerOcean}/>
                <Route path='/forest' component={BannerForest}/>
                <Banner class='Banner-default' info={banner.info}/>
                <Subheader
                    title={`Your name is "${user.name}", your pass is "${user.password}" and you are an "${user.type}"`}
                    click={this.setNewBtnText.bind(this, 'New Title')}
                    btnText={this.state.btnText}/>
            </main>
        );
    }
}

const mapStateToProps = function (store) {
    console.log('string', store);
    return {
        user: store.user.client,
        banner: store.banner.banner
    }

};

export default connect(mapStateToProps)(App)
