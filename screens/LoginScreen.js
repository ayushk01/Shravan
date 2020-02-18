import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Image,
  StatusBar,
  LayoutAnimation,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      authenticating: false,
    };
  }

  handleLogin = () => {
    this.setState({
      authenticating: true,
    });
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error =>
        this.setState({errorMessage: error.message, authenticating: false}),
      );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#e9446a"></StatusBar>

        <Image
          source={require('../assets/authHeader.png')}
          style={{marginTop: -116, marginLeft: -50}}></Image>

        <Image
          source={require('../assets/authFooter.png')}
          style={{position: 'absolute', bottom: -325, right: -225}}></Image>

        <Text style={styles.greeting}>{`Hi,\n Please Login to Continue`}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
              value={this.state.email}></TextInput>
          </View>

          <View style={{marginTop: 32}}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}
              value={this.state.password}></TextInput>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleLogin()}>
          {!this.state.authenticating && (
            <Text style={{color: '#fff', fontWeight: '600'}}>Sign In</Text>
          )}
          {this.state.authenticating && (
            <ActivityIndicator size="small" color="#fff" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 32}}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={{color: '#414959', fontSize: 13}}>
            New to Our App?{' '}
            <Text style={{fontWeight: '600', color: '#e9446a'}}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
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
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 10,
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
    marginHorizontal: 30,
    backgroundColor: '#e9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
