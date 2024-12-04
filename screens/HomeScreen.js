import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png')}  // Cambia esto al logo que tienes en tu proyecto
        style={styles.logo}
      />
      <Text style={styles.slogan}>Acompañándote en el arte de ser mamá</Text>
      <Button
        title="Comenzar"
        onPress={() => navigation.navigate('Growth')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0C1D1',  // Color de fondo
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#8A2BE2',  // Color del texto
  },
});

export default HomeScreen;
