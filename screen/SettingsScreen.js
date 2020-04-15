import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class SettingsScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : () => (
      <Image 
      source={require('../assets/icon_drawer_setting.png')}
      style = {{width:24 ,height:24,marginBottom:20,marginTop:20}}
      />
    )
  }

  render() {
    return (
      <SafeAreaView style={[styles.container0, { backgroundColor: '#00b49f' }]}>   
      <View style={styles.container4}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Image style={{ width: 50, height: 50,marginLeft:16,backgroundColor:"#00b49f"}}
                    source={require('../assets/btn_navbar_mobile.png')}
                  />
        </TouchableOpacity>
      <Text>SettingsScreen</Text>
    </View>
    </SafeAreaView>
      

    )
  }

}

export default SettingsScreen;

const styles = StyleSheet.create({
  container4: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});