import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navegación
import { createStackNavigator } from '@react-navigation/stack'; // Navegación de pila (Stack)

import HomeScreen from './screens/HomeScreen'; // Importa las pantallas
import GrowthScreen from './screens/GrowthScreen';
import DiaryScreen from './screens/DiaryScreen';
import LactationScreen from './screens/LactationScreen';
import MomentsScreen from './screens/MomentsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GrowthScreen" component={GrowthScreen} />
        <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
        <Stack.Screen name="LactationScreen" component={LactationScreen} />
        <Stack.Screen name="MomentsScreen" component={MomentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
