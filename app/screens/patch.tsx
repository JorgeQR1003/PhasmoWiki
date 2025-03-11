import React from 'react';
import { View, useColorScheme, Text, StyleSheet } from 'react-native';

export default function Patch() {
  const colorScheme = useColorScheme();

  return (
    <View>
        <Text> Patch Notes </Text>
    </View>
  );    
}