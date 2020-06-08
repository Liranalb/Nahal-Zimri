import 'react-native-gesture-handler';
/**
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import LoginForm from "./components/LoginForm"
import HomePageUser from "./components/HomePageUser"
import InfoUser from "./components/InfoUser"
import RoutesUser from "./components/RoutesUser"
import UnitRoutes from "./components/UnitRoutes"
import AdminInfoUser from "./components/AdminInfoUser"
import AdminUnitInfoUser from"./components/AdminUnitInfoUser"
import {name as appName} from './app.json';
import RegForm from './components/RegForm';
import MainLogin from './components/MainLogin';
import ReportsAdmin from "./components/ReportsAdmin";
import HomePageAdmin from './components/HomePageAdmin';
import EventAdmin from './components/EventAdmin';
import ReportForm from './components/ReportForm'
import Reports from './components/Reports'



<<<<<<< HEAD
AppRegistry.registerComponent(appName, () => Reports);
=======
>>>>>>> bb3ed748dd46bb73a4d0b66ecc0ce43e8b6d6541


AppRegistry.registerComponent(appName, () =>Reports);



