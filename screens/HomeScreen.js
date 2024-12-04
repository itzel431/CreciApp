import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
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
    backgroundColor: '#f0c0f0', // Rosa de fondo
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
