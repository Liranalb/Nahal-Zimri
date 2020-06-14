/**
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import LoginForm from "./components/LoginForm"
import HomePageUser from "./components/HomePageUser"
import firebase from "./config/Firebase"

// import AdminInfoUser from "./components/AdminInfoUser"
// import AdminUnitInfoUser from"./components/AdminUnitInfoUser"

import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';



//Testing area Rotem
import InformationAdminPage from './components/InformationAdminPage';
import ReportForm from './components/ReportForm';
import Reports from "./components/Reports";
// End of testing area


AppRegistry.registerComponent(appName, () =>ReportForm);
import HomePageAdmin from "./components/HomePageAdmin";
import InfoUser from "./components/InfoUser";
import UnitInfoUser from "./components/UnitInfoUser";
import ReportsAdmin from "./components/ReportsAdmin";
import EventUser from "./components/EventUser";
import InfoCatagoriesUser from "./components/InfoCatagoriesUser";
import InfoAdmin from "./components/InfoAdmin";
import RoutesUser from "./components/RoutesUser";
import NewOpenRoute from "./components/NewOpenRoute";
import NewOpenArt from "./components/NewOpenArt";
import AdminRoutes from "./components/AdminRoutes";
import AdminUnitRoutes from "./components/AdminUnitRoutes";
import MainLogin from "./components/MainLogin";
import RegForm from "./components/RegForm";


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
