import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const ImageDetail = (props) => {
  return (
    <View style={estilos.principal}>
      <Image source={props.imageSource} />
      <Text style={estilos.titulo}>{props.titulo}</Text>
      <Text style={estilos.puntaje}>
        Puntaje de la imagen = {props.puntaje}
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 30,
  },
  puntaje: {
    fontSize: 20,
    marginBottom: 5,
  },
  principal: {
    alignItems: "center",
  },
});

export default ImageDetail;
