import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View style={estilos.principal}>
      <Text style={estilos.titulo}>COLORES</Text>
      <Button
        title="Agregar un color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View style={estilos.cubos}>
        <FlatList
          keyExtractor={(item) => item}
          data={colors}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: 150,
                  width: 300,
                  backgroundColor: item,
                  marginTop: 10,
                  borderRadius: 10,
                }}
              ></View>
            );
          }}
        />
      </View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
  },

  principal: {
    alignItems: "center",
  },
  centrado: {
    marginLeft: 40,
    marginTop: 80,
  },
});

export default ColorScreen;
