import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      {!isStarted ? (
        <>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.slogan}>Acompañándote en el arte de ser mamá</Text>
          <Button
            title="Comenzar"
            onPress={() => setIsStarted(true)}
          />
        </>
      ) : (
        <HomeScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1C6D3',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
});
