import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Si usas navegación

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bienvenida a Creci</Text>
      <Text style={styles.subHeader}>Elige una opción</Text>
      <Button
        title="Crecimiento"
        onPress={() => navigation.navigate('GrowthScreen')}
      />
      <Button
        title="Diario"
        onPress={() => navigation.navigate('DiaryScreen')}
      />
      <Button
        title="Lactancia"
        onPress={() => navigation.navigate('LactationScreen')}
      />
      <Button
        title="Momentos"
        onPress={() => navigation.navigate('MomentsScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 40,
  },
});

export default HomeScreen;
