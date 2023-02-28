import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import DashboardScreen from '../screens/DashboardScreen';
import UpdateCar from '../screens/UpdateCar';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Login Screen',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          title: 'signUp Screen',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      />
      <Stack.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          title: 'signUp Screen',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      />

      <Stack.Screen
        name="updatecar"
        component={UpdateCar}
        options={{
          title: 'update',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreens;

const styles = StyleSheet.create({});
