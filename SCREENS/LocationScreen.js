import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Alert,
  Platform } from 'react-native';
import MapView from 'react-native-maps';
import axios from "axios";
import { Marker } from 'react-native-maps';

export default class LocationScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      location : {},
    }
  }

  getIssLocation=()=>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544").then(
      response=>{
        this.setState({
          location : response.data,
        })
      } 
    )
    .catch(error=>{
      Alert.alert("No location recieved !!")
    })
  }
  
  componentDidMount(){
    this.getIssLocation();
  }

  render(){
    return (
      <View style={styles.container}>
        <SafeAreaView style = {styles.Safe}/>
        <ImageBackground 
        source = {require('../assets/iss_bg.jpg')}
        style = {styles.background}>
        <View style = {styles.container}>
          <Text style = {styles.text}>ISS LOCATION</Text>
        </View>
        <View>
          <MapView
          style = {styles.iconImage}
           region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker coordinate = {{
              latitude : this.state.location.latitude,
              longitude : this.state.location.longitude}}>
            </Marker>
          </MapView>
        </View>
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
  Safe: {
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
    color : "yellow",
    alignItems: 'center',
    justifyContent: 'center',
    padding : 25,
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
