import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Incrementar"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Disminuir"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Contador Actual: {counter}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({});

export default CounterScreen;
