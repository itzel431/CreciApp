import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LactationTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{`Tiempo: ${time}s`}</Text>
      <Button
        title={isRunning ? 'Detener' : 'Iniciar'}
        onPress={startStopTimer}
        color="#FF69B4"
      />
      <Button title="Resetear" onPress={resetTimer} color="#FF6347" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  timer: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LactationTimer;
