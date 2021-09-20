import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  SafeAreaView, 
  Platform, 
  StatusBar, 
  TouchableOpacity, 
  ImageBackground,
  Image, } from 'react-native';

export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style = {styles.container}>
          <SafeAreaView style = {styles.safearea}/>
          <ImageBackground
           source = {require('../assets/bg_image.png')}
           style = {styles.background}>
        <View style = {styles.titlebar}>
          <Text style = {styles.text}>METEOR TRACKER APP</Text>
        </View>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {()=>{
          this.props.navigation.navigate("Location");
        }}>
          <Image 
          source = {require('../assets/iss_icon.png')}
          style = {styles.iconImage}/>
          <Text style = {styles.number}>1</Text>
          <Text style = {styles.text}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {()=>{
          this.props.navigation.navigate("Meteor");
        }}>
          <Image 
          source = {require('../assets/meteor_bg.jpg')}
          style = {styles.iconImage}/>
          <Text style = {styles.number}>2</Text>
          <Text style = {styles.text}>Meteors</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {()=>{
          this.props.navigation.navigate("Update");
        }}>
          <Image 
          source = {require('../assets/refresh_icon.jpg')}
          style = {styles.iconImage}/>
          <Text style = {styles.number}>3</Text>
          <Text style = {styles.text}>Updates</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlebar: {
    flex : 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  safearea: {
    marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    flex : 0.2,
    marginLeft : 120,
    marginRight : 120,
    marginTop : 150,
    borderRadius : 100,
    backgroundColor : "white",
  },
  text: {
    fontSize : 18,
    fontWeight : 'bold',
    color : "white",
    alignItems: 'center',
    justifyContent: 'center',
    padding : 25
  },
  number: {
    position : 'absolute',
    fontWeight : 'bold',
    color : 'red',
  },
  background: {
    flex : 1,
    resizeMode : 'cover',
  },
  iconImage: {
    height : 50,
    width : 50,
    resizeMode : 'contain',
    position : 'absolute',
  }
});
