import React, { Component } from "react";
import {
  Text,
  StatusBar,
  Button,
  StyleSheet,
  Platform,
  API,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class HomeScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : () => (
      <Image 
      source={require('./assets/icon_drawer_home.png')}
      />
    )
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#00b49f' }]}>
      <StatusBar barStyle="light-content" backgroundColor="#f8f8f8" />
      <View style={styles.headerStyle}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Image style={{ width: 50, height: 50,marginLeft:16}}
                    source={require('./assets/btn_navbar_mobile.png')}
                  />
        </TouchableOpacity>
        <Text style={{ color:"white",fontSize:20,fontWeight:"500"}}>
          My Book
        </Text>
        <Image style={{ width: 50, height: 50,marginRight:16}}
          source={require('./assets/btn_search.png')}
        />
      </View>
      
      <ScrollView style={styles.contentStyle}>
        <View style={styles.listStyle}>
          <View style={styles.imageStyle}> 
            <Image style={{height:180,width:120,borderWidth:3,borderColor:"white",}}
              source={require('./assets/img_the_immortalists.png')}
            />
          </View>
          <View style={styles.listtextStyle}>
            <Text style={{ color:"black",fontSize:18,fontWeight:"500",margin:10}}>
              The Immortalists
            </Text>
            <Text style={{ color:"#717171",fontSize:14,fontWeight:"500",margin:10}}>
              Chloe Benjamin
            </Text>
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              If you were told the date of your death, how would it shape your…
            </Text>
            <View style={styles.listlineStyle}>
              <View style={styles.listline1Style}></View>
              <View style={styles.listline2Style}></View>
            </View>
            
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              50% completed
            </Text>
          </View>
        </View>

        <View style={{height:1,width:"100%",backgroundColor:"#d1d1d1"}}></View>
        
        <View style={styles.listStyle}>
          <View style={styles.imageStyle}> 
            <Image style={{height:180,width:120,borderWidth:3,borderColor:"white",}}
              source={require('./assets/img_gristmillroad.png')}
            />
          </View>
          <View style={styles.listtextStyle}>
            <Text style={{ color:"black",fontSize:18,fontWeight:"500",margin:10}}>
              Grist Mill Road
            </Text>
            <Text style={{ color:"#717171",fontSize:14,fontWeight:"500",margin:10}}>
              Christopher J.
            </Text>
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              Twenty-six years ago Hannah had her eye shot out. Now she wants…
            </Text>
            <View style={styles.listlineStyle}>
              <View style={styles.listline2Style}></View>
              <View style={styles.listline2Style}></View>
            </View>
            
            <TouchableOpacity>
            
                  <Image style={{ width: 100, height: 25,marginLeft:7}}
                    source= {require('./assets/btn_start_read.png')}
                  />
            </TouchableOpacity>
            
            
          </View>
        </View>
        
        <View style={{height:1,width:"100%",backgroundColor:"#d1d1d1"}}></View>

        <View style={styles.listStyle}>
          <View style={styles.imageStyle}> 
            <Image style={{height:180,width:120,borderWidth:3,borderColor:"white",}}
              source={require('./assets/img_the_immortalists.png')}
            />
          </View>
          <View style={styles.listtextStyle}>
            <Text style={{ color:"black",fontSize:18,fontWeight:"500",margin:10}}>
              The Immortalists
            </Text>
            <Text style={{ color:"#717171",fontSize:14,fontWeight:"500",margin:10}}>
              Chloe Benjamin
            </Text>
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              If you were told the date of your death, how would it shape your…
            </Text>
            <View style={styles.listlineStyle}>
              <View style={styles.listline1Style}></View>
              <View style={styles.listline2Style}></View>
            </View>
            
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              50% completed
            </Text>
          </View>
        </View>
      </ScrollView>
      
      <Text style={{ color: '#6a51ae' }}>1 Screen</Text>
      
      <Button
        title="Toggle Drawer"
        onPress={() => navigation.toggleDrawer()}
        color="#6a51ae"
        
      />
    </SafeAreaView>
      

    )
  }

}

export default HomeScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: { flex: 1},
  contentStyle: {
    backgroundColor: "#f8f8f8",
    height:"88%",
    width:"100%"

  },
  headerStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  listStyle:{
    padding:20,
    flexDirection:"row",
  },
  imageStyle:{
    width:120,
    height:180,
    backgroundColor:"white",
    borderColor:"#d1d1d1",
    borderWidth:0.5,
    shadowColor: '#000',
    shadowOffset: { width: 2.5, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 1,    
  },
  listtextStyle:{
    paddingLeft:15,
    paddingTop:7,
    width:"70%",
  },
  listlineStyle:{
    flexDirection:"row",
    margin:10
  },
  listline1Style:{
    backgroundColor:"#70b4a1",
    height:3,
    width:"50%",
  },
  listline2Style:{
    backgroundColor:"#c3c3c3",
    height:3,
    width:"50%"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  startStyle:{
    width:100
  }
});