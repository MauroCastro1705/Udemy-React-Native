import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text>COLORES</Text>
      <Button
        title="Agregar un color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const estilos = StyleSheet.create({});

export default ColorScreen;
