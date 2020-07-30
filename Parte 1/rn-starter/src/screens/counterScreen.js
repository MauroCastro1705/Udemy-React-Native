import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={estilos.principal}>
      <Text style={estilos.titulo}>Contador</Text>
      <Text style={estilos.contador}>Valor: {counter}</Text>
      <View style={estilos.boton1}>
        <Button
          title="Incrementar"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <View style={estilos.boton1}>
          <Button
            title="Disminuir"
            onPress={() => {
              setCounter(counter - 1);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
  },
  contador: {
    fontSize: 20,
    padding: 15,
    margin: 15,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
  },
  principal: {
    alignItems: "center",
  },
  boton1: {
    margin: 15,
  },
  boton2: {
    margin: 15,
  },
});

export default CounterScreen;
