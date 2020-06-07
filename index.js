import 'react-native-gesture-handler';
/**
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';


import {name as appName} from './app.json';
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';
import MainLogin from './components/MainLogin';
import ReportsAdmin from "./components/ReportsAdmin";
import HomePageAdmin from './components/HomePageAdmin';
import EventAdmin from './components/EventAdmin';
import ReportForm from './components/ReportForm'



AppRegistry.registerComponent(appName, () => LoginForm);




