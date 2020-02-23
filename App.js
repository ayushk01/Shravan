import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import firebase from 'firebase';

// Screens
import LoadingScreen from './screens/LoadingScreen';
import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AskScreen from './screens/AskScreen';
import HireSliderScreen from './screens/HireSliderScreen';
import ShravanSliderScreen from './screens/ShravanSliderScreen';
import ShravanDetailScreen from './screens/ShravanDetailScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import HomeScreen from './screens/HomeScreen';

// Your web app's Firebase configuration
import firebaseConfig from './config';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthStack = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
  },
  {
    headerMode: 'none',
  },
);

const AskStack = createStackNavigator(
  {
    Ask: AskScreen,
    HireSlider: HireSliderScreen,
    ShravanSlider: ShravanSliderScreen,
    ShravanDetail: ShravanDetailScreen,
    UserDetail: UserDetailScreen,
  },
  {
    headerMode: 'none',
  },
);

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Intro: IntroScreen,
      Loading: LoadingScreen,
      Auth: AuthStack,
      Ask: AskStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Intro',
    },
  ),
);
