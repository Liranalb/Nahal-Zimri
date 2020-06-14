/**
 * @format
 */
import * as React from 'react';

import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import LoginForm from "./components/LoginForm"


//Testing area Rotem
import InformationAdminPage from './components/InformationAdminPage';
import ReportForm from './components/ReportForm';
import Reports from "./components/Reports";
// End of testing area


AppRegistry.registerComponent(appName, () =>ReportForm);
