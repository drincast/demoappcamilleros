import React, { Component } from 'react';
import { observer } from 'mobx-react';

import generalStyle from '../style';
const configTheme = require('../utils/configstyle');

import {
  AppRegistry,
  Linking,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import dataState from '../datastate';

class QrReader extends Component{
  state = {
    datos: undefined
  }

  activeCodeReading() {
    //alert('Load OK !!!');    
    this.scanner.reactivate();
  }

  onSuccess(e){
    //this.setState({datos: e.data});

    dataState.SetReadCode(e.data);

    dataState.VerifyCode(e.data);

    // Linking
    // .openURL(e.data)
    // .catch(err => console.error('An error occured', err));

    //alert(e.data);

    this.props.navigation.navigate('CodeCompare');
  }

  render(){
    return(
      <ScrollView>
        <View style={[generalStyle.container, {backgroundColor: dataState.GetColorInfo()}]}>
          <QRCodeScanner
            ref={(node) => {this.scanner = node }}
            onRead={this.onSuccess.bind(this)}
            topContent={
              <Text style={styles.centerText}>
                <Text style={styles.textBold}>Lectura de código</Text>
              </Text>
            }
            bottomContent={

              <TouchableOpacity style={generalStyle.bottonContent}
                  onPress={this.activeCodeReading.bind(this)}>
                <Text style={generalStyle.bottonText}>Activar Lector</Text>
              </TouchableOpacity>
            }
            reactivate={false}
          />
        </View>
      </ScrollView>
    )
  }
}

// <TouchableOpacity style={styles.buttonTouchable}>
//   <Text style={styles.buttonText}>{this.state.datos}</Text>
// </TouchableOpacity>


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

export default observer(QrReader);
