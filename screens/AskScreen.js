import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#e9446a"></StatusBar>

        <Image
          source={require('../assets/authHeader.png')}
          style={{position: 'absolute', top: -126, left: -50}}></Image>

        <View style={{flex: 8}}>
          <Text style={styles.greeting}>{`Choose an Option`}</Text>

          <View style={styles.buttonTray}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('ShravanDetail')}>
              {!this.state.authenticating && (
                <Text style={{color: '#fff', fontWeight: '600'}}>
                  Become a Shravan
                </Text>
              )}
              {this.state.authenticating && (
                <ActivityIndicator size="small" color="#fff" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('CareTakerDetail')}>
              {!this.state.authenticating && (
                <Text style={{color: '#fff', fontWeight: '600'}}>
                  Hire a Shravan
                </Text>
              )}
              {this.state.authenticating && (
                <ActivityIndicator size="small" color="#fff" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 2}}>
          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 32}}
            onPress={() => this.props.navigation.navigate('App')}>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#e9446a'}}>
              Ask Me Later
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 132,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  button: {
    marginHorizontal: 48,
    marginVertical: 20,
    backgroundColor: '#e9446a',
    borderRadius: 18,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTray: {
    flex: 1,
    marginTop: '30%',
  },
});

export default HomeScreen;
