import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const MomentsScreen = () => {
  const [note, setNote] = useState('');
  const [moments, setMoments] = useState([]);

  const handleAddMoment = () => {
    if (note.trim()) {
      setMoments([...moments, { id: Date.now().toString(), note }]);
      setNote('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Momentos Importantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe un momento"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Guardar Momento" onPress={handleAddMoment} />
      
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.note}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  item: {
    marginVertical: 10,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default MomentsScreen;
