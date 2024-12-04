import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const MomentsScreen = () => {
  const [moment, setMoment] = useState('');
  const [momentsList, setMomentsList] = useState([]);

  const addMoment = () => {
    if (moment.trim() !== '') {
      setMomentsList([...momentsList, moment]);
      setMoment('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Momentos Especiales</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe un momento"
        value={moment}
        onChangeText={setMoment}
      />
      <Button title="Añadir Momento" onPress={addMoment} />
      <ScrollView style={styles.listContainer}>
        {momentsList.map((item, index) => (
          <Text key={index} style={styles.listItem}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  listContainer: {
    marginTop: 20,
  },
  listItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MomentsScreen;
