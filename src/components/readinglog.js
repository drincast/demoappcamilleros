import React, { Component } from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';

import dataState from '../datastate';

class ReadingLog extends Component{
  // constructor(){
  //   super();
  //
  //   this.state = {
  //     data: dataState.log,
  //   }
  // }

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
    alert("id: " + item.id + " - " + item.state);
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Hola !!!!!!!!!!</Text>
        <Text>De nuevo</Text>
        <SectionList
          sections={[
            {title: 'LOG', data: dataState.log}
          ]}

          renderSectionHeader={ ({section}) => <Text style={styles.headerList}>
                                                   { section.title }
                                               </Text> }

          renderItem = {
            ({item}) => <Text style={(item.state === 0) ? styles.itemNot : styles.itemOk} onPress={this.getSectionListItem.bind(this, item)}> { item.date + " - " + item.device + " - " + item.state } </Text>
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
    backgroundColor : '#CDDC39',
    fontSize : 20,
    padding: 5,
    color: '#fff',
  },
  itemOk: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth:1,
    backgroundColor : '#00FF00',
  },
  itemNot: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth:1,
    backgroundColor : '#FF0000',
  }
});

export default observer(ReadingLog);
