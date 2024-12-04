import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

export default function DiaryScreen() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const addNote = () => {
    const newNote = { note, date: new Date().toLocaleString(), id: Math.random().toString() };
    setNotes(prevNotes => [...prevNotes, newNote]);
    setNote('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nota"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Guardar Nota" onPress={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text>{item.date}</Text>
            <Text>{item.note}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  note: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
});
