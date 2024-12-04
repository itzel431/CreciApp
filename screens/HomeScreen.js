import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')} // Asegúrate de tener el logo en la carpeta 'assets'
        style={styles.logo} 
      />
      <Text style={styles.slogan}>Acompañándote en el arte de ser mamá</Text>
      <Button
        title="Comenzar"
        onPress={() => navigation.navigate('Growth')} // Navegar a GrowthScreen
        color="#FF69B4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1C6D3',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  }
});

export default HomeScreen;
