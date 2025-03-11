import React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import TabNavigator from '../app/navigation/tabNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    Shlop: require('../assets/fonts/shlop.otf'),
    LazyDog: require('../assets/fonts/lazy_dog.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return <TabNavigator />;
}
