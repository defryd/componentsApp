/**
 * @format
 */
import './gesture-handler';
import {AppRegistry} from 'react-native';
import App, { ComponentsApp } from './src/ComponentsApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ComponentsApp);
