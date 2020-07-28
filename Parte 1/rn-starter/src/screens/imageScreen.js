import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={estilos.titulo}>Pantalla de imagenes</Text>
      <ImageDetail
        titulo="El Bosque"
        imageSource={require("../../assets/forest.jpg")}
        puntaje="5"
      />
      <ImageDetail
        titulo="La Playa"
        imageSource={require("../../assets/beach.jpg")}
        puntaje="8"
      />
      <ImageDetail
        titulo="La Montaña"
        imageSource={require("../../assets/mountain.jpg")}
        puntaje="3"
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 35,
  },
});

export default ImageScreen;
