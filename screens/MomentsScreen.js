import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const MomentsScreen = () => {
  const [moment, setMoment] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAddEntry = () => {
    setEntries([...entries, { moment, date: new Date().toLocaleString() }]);
    setMoment('');
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe un momento..."
        value={moment}
        onChangeText={setMoment}
      />
      <Button title="Agregar Momento" onPress={handleAddEntry} />
      {entries.map((entry, index) => (
        <View key={index} style={styles.entry}>
          <Text>{`Fecha: ${entry.date}`}</Text>
          <Text>{`Momento: ${entry.moment}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  entry: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default MomentsScreen;
