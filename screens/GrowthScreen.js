import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const GrowthScreen = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [records, setRecords] = useState([]);

  const addRecord = () => {
    const newRecord = { key: Math.random().toString(), weight, height, date: new Date().toLocaleString() };
    setRecords((prevRecords) => [...prevRecords, newRecord]);
    setWeight('');
    setHeight('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Crecimiento</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <Button title="Agregar Registro" onPress={addRecord} />
      
      <FlatList
        data={records}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>Peso: {item.weight} kg, Altura: {item.height} cm</Text>
            <Text>Fecha: {item.date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  record: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default GrowthScreen;
