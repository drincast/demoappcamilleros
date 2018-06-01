/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';



import RouterA from './src/routera';
// import Start from './src/components/start';
// import QrReader from './src/components/qrreader';
// import CodeCompare from './src/components/codecompare';

// const RouterA =  createStackNavigator(
//   {
//     Start: Start,
//     QrReader: QrReader,
//     CodeCompare: CodeCompare,
//   },
//   {
//     initialRouteName: 'Start',
//   }
// );

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RouterA />
    );
  }
}
