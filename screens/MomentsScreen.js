import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MomentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Momentos Especiales</Text>
      <Button title="Añadir Momento" onPress={() => alert("Añadir Momento")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1C6D3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
