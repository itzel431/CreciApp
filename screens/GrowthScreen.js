import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GrowthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pantalla de Crecimiento</Text>
      
      <Button
        title="Salud"
        onPress={() => console.log('Salud')} // Aquí agregarás la funcionalidad más adelante
      />
      <Button
        title="Momentos"
        onPress={() => console.log('Momentos')}
      />
      <Button
        title="Lactancia"
        onPress={() => console.log('Lactancia')}
      />
      <Button
        title="WhatsApp"
        onPress={() => console.log('WhatsApp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  }
});

export default GrowthScreen;
