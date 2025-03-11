import React from 'react';
import { View, useColorScheme, Text, StyleSheet, ScrollView } from 'react-native';
import { BotonGhost } from '../components/ghostButton';

const ghostNames = [
    "Spirit", "Wraith", "Phantom", "Poltergeist", "Banshee", "Jinn",
    "Mare", "Revenant", "Shade", "Demon", "Yurei", "Oni", "Yokai",
    "Hantu", "Goryo", "Myling", "Onryo", "The Twins", "Raiju", "Obake", 
    "The Mimic", "Moroi", "Deogen", "Thaye",
  ];

export default function Ghosts() {
  const colorScheme = useColorScheme();

  return (
    <View style={colorScheme === 'dark' ? {backgroundColor: "#222121"} : {backgroundColor: "#f5f5f5"}}>
        <ScrollView 
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {ghostNames.map((name) => (
                <BotonGhost nombre={name}/>
            ))}
        </ScrollView>
    </View>
  );    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 10,
        paddingBottom: 90,
    },
});