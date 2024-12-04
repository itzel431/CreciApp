import 'react-native-gesture-handler';  // Importa esto primero
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

// Pantallas de tu aplicación
import HomeScreen from './screens/HomeScreen';
import GrowthScreen from './screens/GrowthScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Growth" component={GrowthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
