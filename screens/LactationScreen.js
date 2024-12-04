import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LactationScreen = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    setTimer(setInterval(() => setTime((prevTime) => prevTime + 1), 1000));
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cronómetro de Lactancia</Text>
      <Text style={styles.time}>{time} segundos</Text>
      <Button title="Iniciar" onPress={startTimer} />
      <Button title="Detener" onPress={stopTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  time: {
    fontSize: 36,
    marginBottom: 20,
  },
});

export default LactationScreen;
