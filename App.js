import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions } from 'react-native'

import {createDrawerNavigator,DrawerItems} from 'react-navigation'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import { render } from 'react-dom';



export default class App extends React.Component {
  render(){

  
  return (
    <AppDrawerNavigator/>
  );
}
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150,backgroundColor:"white"}}>
      
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeScreen,
  Settings:SettingsScreen
},{
  contentComponent:CustomDrawerComponent
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
