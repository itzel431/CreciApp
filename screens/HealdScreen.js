import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Salud</Text>
      {/* Aquí puedes agregar contenido relacionado con la salud */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8E1F4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D065A0',
  },
});

export default HealthScreen;
