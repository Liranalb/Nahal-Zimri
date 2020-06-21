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

console.disableYellowBox = true;

class loginHelper extends Component {
    state = {loggedIn: false, isAdmin: false}

    async adminCheck(user) { 
        console.log("adminCheck")
        const eventref = firebase.database().ref('Users/'+user.uid+'/Admin');
        const snapshot = await eventref.once('value');
        this.isAdmin = snapshot.val();
    //     firebase.database().ref('Users/'+user.uid+'/Admin').once('value', (snapshot) => {
    //         const exist = (snapshot.val() !== null);
    //         console.log("exist ", exist)
    //         if (exist) { 
    //             var Admin = snapshot.val();
    //             // state.adminStatus = Admin;
    //             // this.state({adminStatus: Admin})
    //             // alert(state.adminStatus);
    //             // console.log("user data loaded");
    //             this.Admin = Admin;
    //         }
    //  });
    }

    

    async componentDidMount() {
        console.log("componentDidMount")
        firebase.auth().onAuthStateChanged(async (user) => {
            console.log("user", user)
            let isAdmin = false;
            if(user) {
                global.uid = user.uid;
                await this.adminCheck(user)
                this.setState({loggedIn: true, isAdmin: this.isAdmin})
            }
            else {
                this.setState({loggedIn: false, isAdmin: this.isAdmin})
            }
            //this.forceUpdate();
        })
    }

    renderContent() {
        //firebase.auth().signOut();
        console.log("renderContent ")
        console.log("isAdmin: " + this.isAdmin + " isLoggedin " +this.loggedIn );
        if(!this.state.loggedIn) {
            return (<MainLogin/>)
        }
        else if(this.state.isAdmin){
            return <HomePageAdmin/>
        }

        else return <HomePageUser/>
    }

    render () {
        return (
            this.renderContent()
        )
    }
}

AppRegistry.registerComponent(appName, () => HomePageUser);


