import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image } from 'react-native'

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
      <Image 
        source= {require('./assets/img_user_photo.png')}
        style = {{height:80,width:80}}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:HomeScreen
  },
  "My Book":HomeScreen,
  Settings:SettingsScreen
},{
  initialRouteName: 'Home',
  contentComponent:CustomDrawerComponent,
  drawerWidth:335,
  contentOptions:{
    activeTintColor :'#ffffff',
    inactiveTintColor :'#1999CE',

   activeBackgroundColor :'#1999CE',
   inactiveBackgroundColor :'#ffffff',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
