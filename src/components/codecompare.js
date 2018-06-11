import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';

import dataState from '../datastate';
import generalStyle from '../style';

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

  goToLogs = () => {
    this.props.navigation.navigate('ReadingLog');
  }

  changeBackground = () => {
    //styles.container.backgroundColor = '#FF0000';
    //console.log();
    dataState.ChangeColorInfo();
  }

  render(){
    const NoOK = <Text style={styles.text}>NO</Text>
    const YesOK = <Text style={styles.text}>SI</Text>

    return(
      <View style={[generalStyle.container, styles.container, {backgroundColor: dataState.colorInfo}]}>
        <View style={styles.data}>
          <Text style={styles.text}>codigo: {dataState.codes[0].code} - estado: {dataState.codes[0].state}</Text>
          <Text style={styles.text}>codigo: {dataState.codes[1].code} - estado: {dataState.codes[1].state}</Text>
          <Text style={styles.text}>codigo: {dataState.codes[2].code} - estado: {dataState.codes[2].state}</Text>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.data}>
          {dataState.ok === 0 ? NoOK : YesOK}
        </View>
        <View style={styles.sec2}>
          <TouchableOpacity onPress={this.goToLogs.bind(this)}
            style={generalStyle.bottonContent}>
            <Text style={generalStyle.bottonText}>Ver Log</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

// <View style={styles.sec2}>
//   <TouchableOpacity>
//     <Button title="cambiar" onPress={this.changeBackground.bind(this)}></Button>
//   </TouchableOpacity>
// </View>

// container: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#F5FCFF',
// },

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  data:{
    alignItems: 'center',
    // flex:1,
  },
  sec2:{
    // flex:1,
  },
  text:{
    fontSize: 20,
  }
});

export default observer(CodeCompare);
