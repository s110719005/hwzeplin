import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image } from 'react-native'

import {createDrawerNavigator,DrawerItems} from 'react-navigation'
import HomeScreen from './screen/HomeScreen'
import SettingsScreen from './screen/SettingsScreen'
import AboutusScreen from './screen/AboutusScreen'
import FavoritesScreen from './screen/FavoritesScreen'
import MybookScreen from './screen/MybookScreen'
import { render } from 'react-dom';



export default class App extends React.Component {
  render(){

  
  return (
    <AppDrawerNavigator/>
  );
}
}

const CustomDrawerComponent = (props) => (
  // <SafeAreaView style={{flex:1,backgroundColor:"#00b49f"}}>
  <View style={{backgroundColor:"#ebebeb",height:"100%"}}>
    <View style={{height:220,backgroundColor:"#00b49f"}}>
      <Image 
        source= {require('./assets/img_user_photo.png')}
        style = {{height:80,width:80,marginTop:70,marginLeft:20}}
      />
      <View style={styles.userinfoStyle}>
        <View>
          <Text style={styles.userinfotextStyle}>
            GamexHCl
          </Text>
          <Text style={styles.userinfotextStyle}>
            gdlab2017@gmail.com
          </Text>
        </View>
        <Image 
          source= {require('./assets/btn_down_arrow.png')}
          style = {{height:24,width:24}}
        />
      </View>
      
    </View>
    
    <ScrollView>
      <DrawerItems {...props}/>
      
    </ScrollView>
  </View>
    
    
  // </SafeAreaView>
  
)

const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:MybookScreen
  },
  "My Book":HomeScreen,
  Favorites:FavoritesScreen,
  Settings:SettingsScreen,
  Aboutus:AboutusScreen
},{
  initialRouteName: 'My Book',
  contentComponent:CustomDrawerComponent,
  drawerWidth:335,
  contentOptions:{
    activeTintColor :'#ffffff',
    inactiveTintColor :'#5c5c5c',

   activeBackgroundColor :'#00b49f',
   inactiveBackgroundColor :'#ebebeb',
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userinfoStyle:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:20
  },
  userinfotextStyle:{
    color:"white",
    marginRight:120
  }
});
