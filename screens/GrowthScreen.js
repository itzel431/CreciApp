import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const GrowthScreen = () => {
  const [growthData, setGrowthData] = useState([]);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleAddGrowth = () => {
    if (weight && height) {
      setGrowthData([
        ...growthData,
        { id: Date.now().toString(), weight, height },
      ]);
      setWeight('');
      setHeight('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crecimiento del bebé</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <Button title="Registrar Crecimiento" onPress={handleAddGrowth} />
      
      <FlatList
        data={growthData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Peso: {item.weight} kg</Text>
            <Text>Altura: {item.height} cm</Text>
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

export default GrowthScreen;
