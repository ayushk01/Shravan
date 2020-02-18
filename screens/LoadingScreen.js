import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Ask' : 'Auth');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content"></StatusBar>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default LoadingScreen;
