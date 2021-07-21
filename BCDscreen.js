import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader'

export default class BCDscreen extends React.Component{
  render(){
    return(
      <View>
       <MyHeader title={"Courses"} navigation={this.props.navigation}/>
        <Image
          style={styles.imageIcon}
         source={require('../assets/C1.png')}
        /> 
        <Image
          style={styles.imageIcon}
         source={require('../assets/C2.png')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  imageIcon: {
    width: 300,
    height: 200,
    marginLeft: 30,
    marginTop: 25,
  },
});

