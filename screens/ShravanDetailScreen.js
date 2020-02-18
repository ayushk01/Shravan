import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
  StatusBar,
  ScrollView,
  Picker,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import firebase from 'firebase';
import Entypo from 'react-native-vector-icons/Entypo';

class ShravanDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      gender: 'male',
      address: '',
      details: '',
      skills: '',
      availableTime: '',
    };
  }

  handleSubmit = () => {
    console.log(this.state);
    Alert.alert('Your details have been submited. We will contact you shortly');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#e9446a"></StatusBar>
        <ScrollView>
          <Image
            source={require('../assets/authHeader.png')}
            style={{position: 'absolute', top: -126, left: -50}}></Image>

          <View
            style={{
              position: 'absolute',
              top: 64,
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={styles.info}>Enter Your Details</Text>
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          <View style={styles.form}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  width: '65%',
                  marginRight: 20,
                }}>
                <Text style={styles.inputTitle}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={name => this.setState({name})}
                  value={this.state.name}
                />
              </View>
              <TouchableOpacity style={styles.avatar}>
                <Entypo name="user" size={50} color="#fff"></Entypo>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 25, flexDirection: 'row'}}>
              <View style={{width: '45%', marginRight: '10%'}}>
                <Text style={styles.inputTitle}>Age</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={age => this.setState({age})}
                  value={this.state.age}
                  keyboardType="numeric"
                />
              </View>

              <View style={{width: '45%'}}>
                <Text style={styles.inputTitle}>Gender</Text>
                <Picker
                  selectedValue={this.state.gender}
                  style={styles.input}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({gender: itemValue})
                  }>
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
              </View>
            </View>
            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Address</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={address => this.setState({address})}
                value={this.state.address}
              />
            </View>
            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Skill Set</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={skills => this.setState({skills})}
                value={this.state.skills}
              />
            </View>
            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Time That Suits You</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={availableTime => this.setState({availableTime})}
                value={this.state.availableTime}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleSubmit()}>
            {!this.state.authenticating && (
              <Text style={{color: '#fff', fontWeight: '600'}}>
                Submit Details
              </Text>
            )}
            {this.state.authenticating && (
              <ActivityIndicator size="small" color="#fff" />
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipButton: {
    top: 10,
    left: '88%',
  },
  info: {
    marginTop: 34,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 78,
  },
  form: {
    marginTop: 20,
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 10,
    width: '90%',
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161f3d',
  },
  button: {
    marginHorizontal: 40,
    backgroundColor: '#e9446a',
    borderRadius: 18,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    marginTop: -25,
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#e1e2e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShravanDetailScreen;
