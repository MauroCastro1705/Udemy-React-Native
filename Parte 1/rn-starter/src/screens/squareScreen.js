import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";
import ColorCounter from "../components/colorCounter";

const COLOR_INCREMENT = 15; //saltos en el color

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //color === 'red','green','blue'
    //change === +15, -15
    switch (color) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        } else {
          setRed(red + change);
        }
        return;
    }
    switch (color) {
      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        } else {
          setGreen(green + change);
        }
        return;
    }
    switch (color) {
      case "blue":
        if (blue + change > 255 || blue + change < 0) {
          return;
        } else {
          setBlue(blue + change);
        }
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Rojo"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Verde"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Azul"
      />
      <View
        style={{
          marginTop: 15,
          marginLeft: 100,
          height: 200,
          width: 200,
          borderRadius: 15,
          backgroundColor: `rgb(${red} , ${green} , ${blue} )`,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.8,
          shadowRadius: 4.65,

          elevation: 5,
        }}
      />
      <Text style={estilos.centrado}>
        Composicion RGB : ({red}, {green}, {blue})
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  centrado: {
    marginTop: 35,
    marginLeft: 100,
  },
});

export default SquareScreen;
