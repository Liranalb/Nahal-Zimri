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
import Reports from "./components/Reports";
import HomePageAdmin from './components/HomePageAdmin';
import EventAdmin from './components/EventAdmin';




AppRegistry.registerComponent(appName, () => HomePageAdmin);




