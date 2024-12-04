import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const DiaryScreen = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    if (entry.trim() !== '') {
      const timestamp = new Date().toLocaleString();
      setEntries([...entries, { entry, timestamp }]);
      setEntry('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mi Diario</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={entry}
        onChangeText={setEntry}
        multiline
      />
      <Button title="Añadir Entrada" onPress={addEntry} />
      <ScrollView style={styles.listContainer}>
        {entries.map((item, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
            <Text style={styles.text}>{item.entry}</Text>
          </View>
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
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 5,
  },
  listContainer: {
    marginTop: 20,
  },
  entry: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  text: {
    fontSize: 16,
  },
});

export default DiaryScreen;
