import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const Notes = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() !== '') {
      const newNote = { key: Math.random().toString(), note, date: new Date().toLocaleString() };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNote('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bloc de Notas</Text>
      <TextInput
        placeholder="Escribe tu nota aquí"
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />
      <Button title="Agregar Nota" onPress={addNote} />
      
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text>{`Fecha: ${item.date}`}</Text>
            <Text>{`Nota: ${item.note}`}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  note: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default Notes;
