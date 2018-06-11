import { createStackNavigator } from 'react-navigation';

import Start from './components/start';
import QrReader from './components/qrreader';
import CodeCompare from './components/codecompare';
import ReadingLog from './components/readinglog';

const RouterA =  createStackNavigator(
  {
    Start: Start,
    QrReader: QrReader,
    CodeCompare: CodeCompare,
    ReadingLog: ReadingLog,
  },
  {
    initialRouteName: 'Start',
  }
);

export default RouterA;
