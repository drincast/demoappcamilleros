import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';

import dataState from '../datastate';

class CodeCompare extends Component {
  goStart = () => {
    this.props.navigation.navigate('Start');
  }

  startReading = () => {
    this.props.navigation.navigate('QrReader');
  }

  complete = () => {
    if(dataState.ok === 0){
      return "NO";//<Text style={styles.text}>NO</Text>;
    }
    else{
      return "SI"//<Text style={styles.text}>SI</Text>;
    }
  }

  render(){
    const NoOK = <Text style={styles.text}>NO</Text>
    const YesOK = <Text style={styles.text}>SI</Text>

    return(
      <View style={styles.container}>
        <View style={styles.data}>
          <Text style={styles.text}>codigo: {dataState.codes[0].code} - estado: {dataState.codes[0].state}</Text>
          <Text style={styles.text}>codigo: {dataState.codes[1].code} - estado: {dataState.codes[1].state}</Text>
          <Text style={styles.text}>codigo: {dataState.codes[2].code} - estado: {dataState.codes[2].state}</Text>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.data}>
          {dataState.ok === 0 ? NoOK : YesOK}
        </View>



      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  data:{
    flex:1,
  },
  espace:{
    flex:1,
  },
  text:{
    // flex: 1,
    fontSize: 20,
  }

});

export default CodeCompare;
