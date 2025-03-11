import React from 'react';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';

export default function Questions() {
  const colorScheme = useColorScheme();

  return (
    <View style={colorScheme === 'dark' ? styles.dark_back : styles.light_back}>
      <Text style={styles.text}>Q&A</Text>
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
  text: {
    fontSize: 30,
  },
});
