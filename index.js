/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginForm from "./components/LoginForm"

import {name as appName} from './app.json';
import RegForm from './components/RegForm';
import MainLogin from './components/MainLogin';


AppRegistry.registerComponent(appName, () => MainLogin);



