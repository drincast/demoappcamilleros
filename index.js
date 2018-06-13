import { AppRegistry } from 'react-native';
import App from './App';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated',
                          'Module RCTImageLoader',
                          '[mobx.array] Attempt to read an array index']);

AppRegistry.registerComponent('demoappcamilleros', () => App);
