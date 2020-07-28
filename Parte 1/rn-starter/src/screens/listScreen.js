import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const amigos = [
    { name: "amigo #1", espacio: " - ", age: "20 años" },
    { name: "amigo #2", espacio: " - ", age: "20 años" },
    { name: "amigo #3", espacio: " - ", age: "20 años" },
    { name: "amigo #4", espacio: " - ", age: "20 años" },
    { name: "amigo #5", espacio: " - ", age: "20 años" },
    { name: "amigo #6", espacio: " - ", age: "20 años" },
    { name: "amigo #7", espacio: " - ", age: "20 años" },
    { name: "amigo #8", espacio: " - ", age: "20 años" },
    { name: "amigo #9", espacio: " - ", age: "20 años" },
  ];
  return (
    <FlatList
      keyExtractor={(amigo) => amigo.name}
      data={amigos}
      renderItem={({ item }) => {
        return (
          <Text style={Styles.textStyle}>
            {item.name + item.espacio + item.age}
          </Text>
        );
      }}
    />
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
