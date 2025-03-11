import React from 'react';
import { View, useColorScheme, StyleSheet } from 'react-native';
import { Boton } from '../components/button';

export default function Home() {
  const colorScheme = useColorScheme();

  return (
    <View style={colorScheme === 'dark' ? styles.dark_back : styles.light_back}>
      <View style={styles.buttonContainer}>
        <Boton nombre="Ghost" imagen="ghost" />
        <Boton nombre="Maps" imagen="map" />
        <Boton nombre="Patch Notes" imagen="patch" />
        <Boton nombre="Tips" imagen="tip" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  light_back: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  dark_back: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222121",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 260,
  },
});
