import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';

import dataState from '../datastate';
import generalStyle from '../style';

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
      <View style={[generalStyle.container, styles.container]}>
        <TouchableOpacity style={generalStyle.bottonContent}
            onPress={this.startReading.bind(this)}>
          <Text style={generalStyle.bottonText}>Leer Código</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={generalStyle.bottonContent}
            onPress={this.printVals.bind(this)}>
          <Text style={generalStyle.bottonText}>Códigos a Leer</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

// <Text style={styles.espace}></Text>
// <TouchableOpacity style={styles.btnReader}>
//   <Button title="Iniciar Lectura" onPress={this.startReading.bind(this)}></Button>
// </TouchableOpacity>
//
// <Text style={styles.espace}></Text>
// <Button title="Códigos a leer" onPress={this.printVals.bind(this)}
//     style={[generalStyle.bottonContent, { borderWidth: 10, borderColor: 'white'}]}></Button>
// <Text style={styles.espace}></Text>
// <Text style={styles.espace}></Text>


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'center',
  },
  espace:{
    flex:1,
  },
  btnReader:{
    // flex:2,
  },
  btnCodes:{
    flex:2,
  }
});

export default observer(Start);
