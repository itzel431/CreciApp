import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creci</Text>
      <Text style={styles.slogan}>Acompañándote en el arte de ser mamá</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  slogan: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Header;
