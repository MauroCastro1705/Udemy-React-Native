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
    <View>
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
    fontSize: 35,
  },
  puntaje: {
    fontSize: 20,
  },
});

export default ImageDetail;
