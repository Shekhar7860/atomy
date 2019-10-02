import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }

  
  _onDone = () => {
    this.props.navigation.navigate('Welcome')
  };
  _onSkip = () => {
    this.props.navigation.navigate('Welcome')
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});
 
const slides = [
  {
    key: 's1',
    text: 'New Revolution in MLM',
    title: 'ATOMY',
    image: require('../images/1.jpg'),
    backgroundColor: '#1abc9c',
  },
  {
    key: 's2',
    title: 'ATOMY',
    text: 'Fastest Growing NetWork Marketing ',
     image: require('../images/2.jpg'),
    backgroundColor: '#2980b9',
  },
  {
    key: 's3',
    title: 'ATOMY',
    text: 'Innovative Way To Earn Huge Money',
    image: require('../images/3.jpg'),
    backgroundColor: '#c0392b',
  },
  {
    key: 's4',
    title: 'ATOMY',
    text: 'A Great Opportunity For Making Money While Sleep',
    image: require('../images/4.jpg'),
    backgroundColor: '#34495e',
  },
 
];