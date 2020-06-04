/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginForm from "./components/LoginForm"
import Reports from "./components/Reports"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Reports);



