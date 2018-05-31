import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class QrReader extends Component{
  state = {
    datos: undefined
  }

  onSuccess(e){
    this.setState({datos: e.data});

    // Linking
    // .openURL(e.data)
    // .catch(err => console.error('An error occured', err));
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.centerText}>
              <Text style={styles.textBold}>Lectura de código</Text>
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>{this.state.datos}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QrReader;
