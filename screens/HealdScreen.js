import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salud del Bebé</Text>
      <Text>Aquí van los registros de salud.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HealthScreen;
