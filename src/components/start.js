import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.espace}></Text>
        <TouchableOpacity style={styles.btnReader}>
          <Button title="Iniciar Lectura" onPress={this.startReading.bind(this)}></Button>
        </TouchableOpacity>

        <Text style={styles.espace}></Text>
        <Button title="Códigos a leer" onPress={this.printVals.bind(this)} style={styles.btnCodes}></Button>
        <Text style={styles.espace}></Text>
        <Text style={styles.espace}></Text>
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
  espace:{
    flex:1,
  },
  btnReader:{
    flex:2,
  },
  btnCodes:{
    flex:2,
  }
});

export default observer(Start);
