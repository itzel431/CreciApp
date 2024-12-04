import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const GrowthScreen = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [records, setRecords] = useState([]);

  const handleAddRecord = () => {
    setRecords([...records, { weight, height, date: new Date().toLocaleString() }]);
    setWeight('');
    setHeight('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registro de Crecimiento</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Agregar Registro" onPress={handleAddRecord} />
      {records.map((record, index) => (
        <View key={index} style={styles.record}>
          <Text>{`Fecha: ${record.date}`}</Text>
          <Text>{`Peso: ${record.weight} kg`}</Text>
          <Text>{`Altura: ${record.height} cm`}</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  record: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default GrowthScreen;
