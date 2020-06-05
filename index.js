import 'react-native-gesture-handler';
/**
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import LoginForm from "./components/LoginForm"
import Reports from "./components/Reports"
import {name as appName} from './app.json';
import ReportForm from './components/ReportForm';
import HomePageAdmin from './components/HomePageAdmin';


AppRegistry.registerComponent(appName, () => HomePageAdmin);



