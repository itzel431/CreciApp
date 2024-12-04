import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const GrowthRecord = () => {
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
      <Text style={styles.title}>Registrar Crecimiento</Text>
      <TextInput
        placeholder="Peso (kg)"
        value={weight}
        onChangeText={setWeight}
        style={styles.input}
      />
      <TextInput
        placeholder="Altura (cm)"
        value={height}
        onChangeText={setHeight}
        style={styles.input}
      />
      <Button title="Agregar Registro" onPress={addRecord} />
      
      <FlatList
        data={records}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>{`Fecha: ${item.date}`}</Text>
            <Text>{`Peso: ${item.weight} kg`}</Text>
            <Text>{`Altura: ${item.height} cm`}</Text>
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
  record: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default GrowthRecord;
