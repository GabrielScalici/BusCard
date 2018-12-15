import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/model/homeScreen';
import Tab from './src/nav/tab';
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
