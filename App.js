import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'

import {createDrawerNavigator,DrawerNavigator} from 'react-navigation'
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

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeScreen,
  Settings:SettingsScreen
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
