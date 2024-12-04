import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Stopwatch } from 'react-native';

export default function LactationScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lactancia</Text>
      <Stopwatch
        start={isRunning}
        reset={time === 0}
        options={{ timerStart: 'start', timerStop: 'stop' }}
        getTime={(time) => setTime(time)}
      />
      <Button title={isRunning ? "Detener" : "Iniciar"} onPress={startStop} />
      <Button title="Reiniciar" onPress={resetTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1C6D3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
