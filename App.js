import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import firebase from 'firebase';

// Screens
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AskScreen from './screens/AskScreen';
import ShravanDetailScreen from './screens/ShravanDetailScreen';
import CareTakerDetailScreen from './screens/CareTakerDetailScreen';
import PayeeDetailScreen from './screens/PayeeDetailScreen';
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
    ShravanDetail: ShravanDetailScreen,
    CareTakerDetail: CareTakerDetailScreen,
    PayeeDetail: PayeeDetailScreen,
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
      Loading: LoadingScreen,
      Auth: AuthStack,
      Ask: AskStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
