/**
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import LoginForm from "./components/LoginForm"
import HomePageUser from "./components/HomePageUser"
import firebase from "./config/Firebase"

// import AdminInfoUser from "./components/AdminInfoUser"
// import AdminUnitInfoUser from"./components/AdminUnitInfoUser"

import React, { Component } from "react"
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import HomePageAdmin from "./components/HomePageAdmin";
import InfoUser from "./components/InfoUser";
import UnitInfoUser from "./components/UnitInfoUser";
import Reports from "./components/Reports";
import ReportForm from "./components/ReportForm";
import ReportsAdmin from "./components/ReportsAdmin";
import EventUser from "./components/EventUser";
import InfoCatagoriesUser from "./components/InfoCatagoriesUser";
import InfoAdmin from "./components/InfoAdmin";
import InformationAdminPage from "./components/InformationAdminPage";
import RoutesUser from "./components/RoutesUser";
import NewOpenRoute from "./components/NewOpenRoute";
import NewOpenArt from "./components/NewOpenArt";
import AdminRoutes from "./components/AdminRoutes";
import AdminUnitRoutes from "./components/AdminUnitRoutes";
import MainLogin from "./components/MainLogin";
import RegForm from "./components/RegForm";
/*
import InfoUnitAdmin from "./components/InfoUnitAdmin";
import AdminButton from "./components/AdminButton";
import AdminTextIn from "./components/AdminTextIn";
import EventAdmin from "./components/EventAdmin";
import RoutesUser from "./components/RoutesUser";
import InfoComp from "./components/InfoComp";
import InformationPage from "./components/InformationPage";
import PathCatagories from "./components/PathCatagories";

import ReportBox from "./components/ReportBox";
import ReportForm from "./components/ReportForm";
import ReportFormComp from "./components/ReportFormComp";
import ReportsAdmin from "./components/ReportsAdmin";

import NewOpenRoute from "./components/NewOpenRoute";
import HeaderComp from "./components/HeaderComp";
class App extends Component {
}
*/

class loginHelper extends Component {

    state = {loggedIn: false}

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true})
            }
            else {
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent() {

        if(!this.state.loggedIn) {
            return (<MainLogin/>)
        }
        else return <HomePageUser/>
    }

    render () {
        return (
            this.renderContent()
        )
    }
}

AppRegistry.registerComponent(appName, () => loginHelper);