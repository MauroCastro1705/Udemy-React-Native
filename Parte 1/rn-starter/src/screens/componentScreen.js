import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const nombre = "Panda";

  return (
    <View>
      <Text style={styles.textStyle}>Pagina de prueba</Text>
      <Text style={styles.estilo2}>Mi nombre es {nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  estilo2: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
