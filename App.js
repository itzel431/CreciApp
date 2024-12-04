import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GrowthScreen from './screens/GrowthScreen';
import DiaryScreen from './screens/DiaryScreen';
import LactationScreen from './screens/LactationScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GrowthScreen" component={GrowthScreen} />
        <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
        <Stack.Screen name="LactationScreen" component={LactationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
