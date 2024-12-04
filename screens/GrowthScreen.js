import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GrowthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Crecimiento</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1c6d3',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GrowthScreen;
