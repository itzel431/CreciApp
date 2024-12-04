import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const MomentsScreen = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note) {
      setNotes([...notes, { id: Date.now(), note }]);
      setNote('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bloc de Notas</Text>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Escribe un momento"
      />
      <Button title="Guardar" onPress={handleAddNote} />
      <View style={styles.notes}>
        {notes.map((noteItem) => (
          <Text key={noteItem.id}>{noteItem.note}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  notes: {
    marginTop: 20,
    width: '80%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
});

export default MomentsScreen;
