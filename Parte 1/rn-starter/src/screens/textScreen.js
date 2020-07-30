import React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={estilos.titulo}>Contraseña</Text>
      <TextInput
        style={estilos.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < 4 ? (
        <Text style={estilos.contra}>Debe ser mas larga de 4 caracteres</Text>
      ) : null}
    </View>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 17,
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    height: 40,
  },
  contra: {
    color: "red",
    alignSelf: "center",
  },
});

export default TextScreen;
