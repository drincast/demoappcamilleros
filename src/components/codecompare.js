import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { observer } from 'mobx-react';

import dataState from '../datastate';

class CodeCompare extends Component {
  goStart = () => {
    this.props.navigation.navigate('Start');
  }

  startReading = () => {
    this.props.navigation.navigate('QrReader');
  }

  render(){
    return(
      <View>
        <Text>codigo: {dataState.codes[0].code} - estado: {dataState.codes[0].state}</Text>
        <Text>codigo: {dataState.codes[1].code} - estado: {dataState.codes[1].state}</Text>
        <Text>codigo: {dataState.codes[2].code} - estado: {dataState.codes[2].state}</Text>
      </View>
    );
  }

}

export default CodeCompare;
