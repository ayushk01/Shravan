import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default class ShravanSliderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDone = () => {
    this.props.navigation.navigate('ShravanDetail');
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
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

const slides = [
  {
    key: 's1',
    title: `It's and Interesting Journey`,
    text: `If you want to help people, We'll help you earn`,
    image: require('../assets/shravan-1.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#BCF4F5',
  },
  {
    key: 's2',
    title: 'Each Shravan is Verified',
    text: 'We use various techniques to very each and every Shravan',
    image: require('../assets/shravan-2.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#B4EBCA',
  },
  {
    key: 's3',
    title: 'We Train',
    text: 'We train to bring the best out of You',
    image: require('../assets/shravan-3.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#D9F2B4',
  },
];
