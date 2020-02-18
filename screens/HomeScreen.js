import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const users = [
  {
    name: 'Dummy Name',
    avatar: require('../assets/tempAvatar.jpg'),
  },
];

class HomeDetailScreen extends React.Component {
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
          style={{marginTop: -116, marginLeft: -50}}></Image>

        <Text style={styles.greeting}>{`Available Shravans`}</Text>

        <Card title="Shravan">
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={require('../assets/tempAvatar.jpg')}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
        <Card title="Shravan">
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={require('../assets/tempAvatar.jpg')}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
        <Card title="Shravan">
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={require('../assets/tempAvatar.jpg')}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
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
  image: {
    height: 50,
    width: 50,
  },
});

export default HomeDetailScreen;
