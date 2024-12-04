import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const GrowthScreen = () => {
  const [growth, setGrowth] = useState('');
  const [records, setRecords] = useState([]);

  const handleAddRecord = () => {
    if (growth) {
      setRecords([...records, { id: Date.now(), growth }]);
      setGrowth('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Crecimiento</Text>
      <TextInput
        style={styles.input}
        value={growth}
        onChangeText={setGrowth}
        placeholder="Introduce el dato de crecimiento"
      />
      <Button title="Agregar" onPress={handleAddRecord} />
      <View style={styles.records}>
        {records.map((record) => (
          <Text key={record.id}>{record.growth}</Text>
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
  records: {
    marginTop: 20,
    width: '80%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
});

export default GrowthScreen;
