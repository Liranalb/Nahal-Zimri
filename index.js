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
import AdminButton from './components/AdminButton';
import InfoBox from './components/explore/InfoBox';
import InformationAdminPage from './components/InformationAdminPage';
import ReportFormComp from './components/ReportFormComp';
import InfoCatagories from './components/InfoCatagories';
import InfoComp from './components/InfoComp';

AppRegistry.registerComponent(appName, () => InformationAdminPage);



