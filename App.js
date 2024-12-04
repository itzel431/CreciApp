import 'react-native-gesture-handler';  // Esto debe estar primero
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Pantallas de la aplicación
import HomeScreen from './screens/HomeScreen';
import GrowthScreen from './screens/GrowthScreen';
import MomentsScreen from './screens/MomentsScreen';
import HealthScreen from './screens/HealthScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Growth" component={GrowthScreen} />
        <Stack.Screen name="Moments" component={MomentsScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

