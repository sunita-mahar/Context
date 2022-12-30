 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, { createContext, useState } from 'react';
import type from 'react';
import Login from './component/Login';
import Home from './component/Home';
import BottomMenu from './component/BottomMenu'

import { colors } from "../constant/Colors";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export const AuthContext = createContext({});

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');




const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
   <>

<AuthContext.Provider value={{email,password}}>

<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="login">

    {/* Login Screen */}
    <Stack.Screen name="login" component={Login} />

    {/* Home Screen */}
    <Stack.Screen name="home" component={Home} />


    </Stack.Navigator>
   </NavigationContainer> 

   </AuthContext.Provider>
   
   </>
  );
};


const styles = StyleSheet.create({

});

export default App;
