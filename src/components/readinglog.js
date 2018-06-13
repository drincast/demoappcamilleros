import React, { Component } from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';

import dataState from '../datastate';
import generalStyle from '../style';
const configTheme = require('../utils/configstyle');

class ReadingLog extends Component{
  // ComponentDipMount(){
  //   if(dataState.log.length > 0){
  //     this.setState({data: dataState.log});
  //   }
  // }

  impLog = () => {
    // let correct;
    // let text;
    // dataState.log.forEach((value, index) => {
    //   if(code === value.code){
    //     correct = value.state;
    //     text = value.date + " - " + value.device + correct;
    //   }
    // });
  }

  getSectionListItem = (item) =>{
    alert("code: " + item.code + " - " + item.state);
  }

  render(){
    return(
      <View style={generalStyle.container}>
        <SectionList
          sections={[
            {title: 'LOG', data: dataState.log}
          ]}

          renderSectionHeader={
            ({section}) => <Text style={styles.headerList}>
                            { section.title }
                           </Text> }

          renderItem = {
            ({item}) => <Text style={(item.state === 0) ? styles.itemNot : styles.itemOk}
                              onPress={this.getSectionListItem.bind(this, item)}> { item.date + " - " + item.device + " - " + item.state }
                        </Text>
          }

          keyExtractor={ (item, index) => index }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerList: {
    backgroundColor : configTheme.thisBlue,
    fontSize : 25,
    padding: 5,
    color: configTheme.thisWhite,
  },
  itemOk: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth:1,
    backgroundColor : configTheme.thisGreen,
  },
  itemNot: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth:1,
    backgroundColor : configTheme.thisRed,
  }
});

export default observer(ReadingLog);
