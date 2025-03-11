import React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from '../app/navigation/tabNavigation';
import Ghosts from './screens/ghosts';
import HeaderTitle from './components/headerTitle';
import Maps from './screens/maps';
import Patch from './screens/patch';
import Tips from './screens/tips';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Shlop: require('../assets/fonts/shlop.otf'),
    LazyDog: require('../assets/fonts/lazy_dog.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Ghosts" 
        component={Ghosts} 
        options={{
          header: () => <HeaderTitle title="Ghosts"/>
        }}
      />
      <Stack.Screen 
        name="Maps" 
        component={Maps} 
        options={{
          header: () => <HeaderTitle title="Maps"/>
        }}
      />
      <Stack.Screen 
        name="Patch" 
        component={Patch} 
        options={{
          header: () => <HeaderTitle title="Patch Notes"/>
        }}
      />
      <Stack.Screen 
        name="Tips" 
        component={Tips} 
        options={{
          header: () => <HeaderTitle title="Tips"/>
        }}
      />
    </Stack.Navigator>
  );
}
