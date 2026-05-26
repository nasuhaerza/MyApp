import React, {
  useContext,
} from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import LoginScreen
from '../screens/auth/LoginScreen';

import RegisterScreen
from '../screens/auth/RegisterScreen';

import MainTabNavigator
from './MainTabNavigator';

import {
  AuthContext,
} from '../context/AuthContext';

const Stack =
  createNativeStackNavigator();

export default function AppNavigator() {

  const { session } =
    useContext(AuthContext);

  return (

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        {session ? (

          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
          />

        ) : (

          <>

            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />

            <Stack.Screen
              name="Register"
              component={RegisterScreen}
            />

          </>

        )}

      </Stack.Navigator>

    </NavigationContainer>
  );
}