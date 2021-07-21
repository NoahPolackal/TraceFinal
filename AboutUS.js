import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';

export default class AboutUS extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <MyHeader title={'About US'} navigation={this.props.navigation} />
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 75,
            fontWeight: 'bold',
          }}>
          -About the creator-
        </Text>
        <Image
          style={styles.imageIcon}
          source={require('../assets/creator.png')}
        />
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 75,
            fontWeight: 'bold',
          }}>
          Noah Polackal 13
        </Text>
        <Text
          style={{
            //fontSize: 25,
            marginTop: 10,
            marginLeft: 70,
            fontWeight: 'bold',
          }}>
          Noah Polackal is a great artist who makes comic cartoons digitally and
          physically
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 40,
            fontWeight: 'bold',
          }}>
          My Drawings
        </Text>

        <Image
          style={styles.imageIcon1}
          source={require('../assets/D1.jpg')}
        />
        <Image
          style={styles.imageIcon2}
          source={require('../assets/D2.jpg')}
        />
        <Image
          style={styles.imageIcon3}
          source={require('../assets/D3.jpg')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 100,
    marginTop: 25,
  },
  imageIcon1: {
    width: 200,
    height: 200,
    marginLeft: 100,
    marginTop: 25,
  },
  imageIcon2: {
    width: 200,
    height: 200,
    marginLeft: 100,
    marginTop: 25,
  },
  imageIcon3: {
    width: 200,
    height: 200,
    marginLeft: 100,
    marginTop: 25,
  },
});
