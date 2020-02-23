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
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import firebase from 'firebase';
import Entypo from 'react-native-vector-icons/Entypo';

class UserDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      gender: 'male',
      address: '',
      details: '',
      payeeName: '',
      payeeAge: null,
      payeeGender: 'male',
      payeeContact: null,
      payeeEmail: '',
      payeeAddress: '',
      billingAddress: '',
    };
  }

  handleSubmit = () => {
    firebase
      .database()
      .ref(`${Date().slice(0, 15)}/${this.state.payeeContact}`)
      .set(this.state)
      .then(() => Alert.alert('We will contact you shortly.'))
      .catch(err => rej(err));
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
            <Text style={styles.info}>Care Taker Details</Text>
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
              <Text style={styles.inputTitle}>Brief Details</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={details => this.setState({details})}
                value={this.state.details}
              />
            </View>

            <Text style={styles.info}>Payee Details</Text>

            <View style={{flexDirection: 'row', marginTop: 32}}>
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
                  onChangeText={payeeName => this.setState({payeeName})}
                  value={this.state.payeeName}
                />
              </View>
              <TouchableOpacity style={styles.avatar}>
                <Entypo name="user" size={50} color="#fff"></Entypo>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 25, flexDirection: 'row'}}>
              <View style={{width: '30%', marginRight: '20%'}}>
                <Text style={styles.inputTitle}>Age</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={payeeAge => this.setState({payeeAge})}
                  value={this.state.payeeAge}
                  keyboardType="numeric"
                />
              </View>

              <View style={{width: '50%'}}>
                <Text style={styles.inputTitle}>Gender</Text>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.payeeGender}
                  style={styles.input}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({payeeGender: itemValue})
                  }>
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
              </View>
            </View>

            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Contact Number</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={payeeContact => this.setState({payeeContact})}
                value={this.state.payeeContact}
                keyboardType="numeric"
              />
            </View>
            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={payeeEmail => this.setState({payeeEmail})}
                value={this.state.payeeEmail}
              />
            </View>

            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Relationship with Caretaker</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={() => {}}
                value={this.state.pastShravan}
              />
            </View>

            <Text style={styles.info}>Adress Details</Text>

            <View style={{marginTop: 32, flexDirection: 'row'}}>
              <View style={{width: '45%', marginRight: '10%'}}>
                <Text style={styles.inputTitle}>City</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={() => {}}
                />
              </View>

              <View style={{width: '45%'}}>
                <Text style={styles.inputTitle}>State</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={() => {}}
                />
              </View>
            </View>

            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Country</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={() => {}}
              />
            </View>

            <View style={{marginTop: 32}}>
              <Text style={styles.inputTitle}>Billing Address</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={billingAddress => this.setState({billingAddress})}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleSubmit()}>
            {!this.state.authenticating && (
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: '#fff', fontWeight: '800', marginRight: 10}}>
                  Submit
                </Text>
                <Entypo
                  name="aircraft"
                  style={{color: '#fff', fontSize: 20}}></Entypo>
              </View>
            )}
            {this.state.authenticating && (
              <ActivityIndicator size="small" color="#fff" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 32, marginBottom: 30}}
            onPress={() => this.props.navigation.navigate('App')}>
            <Text style={{fontSize: 13, fontWeight: '500', color: '#e9446a'}}>
              Ask Me Later
            </Text>
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

export default UserDetailScreen;
