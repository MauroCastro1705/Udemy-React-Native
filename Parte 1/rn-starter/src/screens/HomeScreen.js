import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>PRIMERA APP</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Ir a Componentes Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Lista")}
        title="Ir a Lista de amigos"
      />
      <Button
        onPress={() => props.navigation.navigate("Imagenes")}
        title="Ir a Imagenes"
      />
      <Button
        onPress={() => props.navigation.navigate("Contador")}
        title="Ir a Contador"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Ir a Colores"
      />
      <Button
        onPress={() => props.navigation.navigate("Cuadrado")}
        title="Ir a Cuadrado de Color"
      />
      <Button
        onPress={() => props.navigation.navigate("Texto")}
        title="Ir a Contraseña"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 90,
  },
});

export default HomeScreen;
