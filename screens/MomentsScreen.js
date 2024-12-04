import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MomentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Momentos</Text>
      {/* Aquí puedes agregar el contenido o la funcionalidad relacionada con momentos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D065A0',
  },
});

export default MomentsScreen;
