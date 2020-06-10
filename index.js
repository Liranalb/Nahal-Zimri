/**
 * @format
 */

import React, { Component } from "react"
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import HomePageUser from "./components/HomePageUser";
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
import App from "./App";
/*

import InfoUnitAdmin from "./components/InfoUnitAdmin";


import AdminButton from "./components/AdminButton";
import AdminTextIn from "./components/AdminTextIn";
import EventAdmin from "./components/EventAdmin";
import RoutesUser from "./components/RoutesUser";


import InfoComp from "./components/InfoComp";

import InformationPage from "./components/InformationPage";
import PathCatagories from "./components/PathCatagories";
import RegForm from "./components/RegForm";
import ReportBox from "./components/ReportBox";
import ReportForm from "./components/ReportForm";
import ReportFormComp from "./components/ReportFormComp";

import ReportsAdmin from "./components/ReportsAdmin";
import LoginForm from "./components/LoginForm";
import MainLogin from "./components/MainLogin";
import NewOpenRoute from "./components/NewOpenRoute";
import HeaderComp from "./components/HeaderComp";

class App extends Component {

}
*/
AppRegistry.registerComponent(appName, () =>HomePageAdmin);
