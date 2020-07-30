import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Aumentar ${color}`} />
      <Button onPress={() => onDecrease()} title={`Disminuir ${color}`} />
    </View>
  );
};

const estilos = StyleSheet.create({});

export default ColorCounter;
