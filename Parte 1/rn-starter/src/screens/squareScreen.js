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
    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    }
  };
  return (
    <View>
      <Text>COLORES</Text>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Rojo"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Verde"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Azul"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red} , ${green} , ${blue} )`,
        }}
      />
      <Text>
        Composicion RGB : ({red}, {green}, {blue})
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({});

export default SquareScreen;
