/**
 * @format
 */

import LoginForm from "./components/LoginForm"



//Do not delete
// import * as React from 'react';   not working for me 
import React, { Component } from "react"
import MainLogin from "./components/MainLogin";
import HomePageUser from "./components/HomePageUser"
import firebase from "./config/Firebase"
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
// End of do not delete


//Testing area Rotem
import InformationAdminPage from './components/InformationAdminPage';
import ReportForm from './components/ReportForm';
import Reports from "./components/Reports";
// End of testing area



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

import RegForm from "./components/RegForm";
import { set } from "react-native-reanimated";


class loginHelper extends Component {
    state = {loggedIn: false, adminStatus: false}
    
    async adminCheck() { 
        db.ref('Users/'+user.uid+'/Admin').once('value', function (snapshot) {
            const exist = (snapshot.val() !== null);

         if (exist) {
            var Admin = snapshot.val();
            set.state({adminStatus: Admin})
            alert(set.state.adminStatus);
            console.log("user data loaded");

         }
     });
    }

    

    componentWillMount() {
        //firebase.auth().signOut();
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                global.uid = user.uid;
                console.log(global.uid);
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

// function adminCheck() { 
//     db.ref('Users/'+user.uid+'/Admin').once('value', function (snapshot) {
//          const exist = (snapshot.val() !== null);

//          if (exist) {
//             Admin = snapshot.val();
//             alert(Admin);
//             console.log("user data loaded");

//          }
//      });
//     }