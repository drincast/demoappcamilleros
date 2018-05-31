import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';

import dataState from '../datastate';

class Start extends Component {
  startReading = () => {
    this.props.navigation.navigate('QrReader');
  }

  printVals = () => {
    this.props.navigation.navigate('CodeCompare');
    //dataState.PrintValues('ddd');
  }

  render(){
    return(
      <View>
        <TouchableOpacity>
          <Button title="Iniciar Traslado" onPress={this.startReading.bind(this)}></Button>
        </TouchableOpacity>

        <Text>uno</Text>
        <Button title="go..." onPress={this.printVals.bind(this)}></Button>
      </View>
    );
  }

}

export default observer(Start);
