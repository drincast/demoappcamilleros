import { createStackNavigator } from 'react-navigation';

import Start from './components/start';
import QrReader from './components/qrreader';
import CodeCompare from './components/codecompare';

const RouterA =  createStackNavigator(
  {
    Start: Start,
    QrReader: QrReader,
    CodeCompare: CodeCompare,
  },
  {
    initialRouteName: 'Start',
  }
);

export default RouterA;
