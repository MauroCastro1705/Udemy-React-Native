import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Panda capo</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
