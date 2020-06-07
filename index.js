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
import Reports from "./components/Reports";
import HomePageAdmin from './components/HomePageAdmin';






AppRegistry.registerComponent(appName, () =>LoginForm);



