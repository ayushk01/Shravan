import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default class IntroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDone = () => {
    this.props.navigation.navigate('Loading');
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={() => this.onDone()}
        showSkipButton={true}
        onSkip={() => this.onDone()}
      />
    );
  }
}
const styles = StyleSheet.create({
  mainapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const slides = [
  {
    key: 's1',
    title: 'An app for your special people',
    text: 'We need your basic information for find someone ',
    image: {
      uri: 'https://imgur.com/7ClQj9M.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#BCF4F5',
  },
  {
    key: 's2',
    title: `We'll find you Shravans`,
    text: 'Excited to know who a Shravan is?',
    image: {
      uri: 'https://imgur.com/BVQ79rh.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#B4EBCA',
  },
  {
    key: 's3',
    title: 'Cheers',
    text: `Shravans are people to help your loved ones when you're away`,
    image: {
      uri: 'https://imgur.com/RPI8wie.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#D9F2B4',
  },
  {
    key: 's4',
    title: `You'll love our service`,
    text: 'Your parents living far away are not lonely anymore',
    image: {
      uri: 'https://imgur.com/f1GhQo1.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FFB7C3',
  },
];
