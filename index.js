/**
 * @format
 */

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

AppRegistry.registerComponent(appName, () =>LoginForm);



