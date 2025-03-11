import React from 'react';
import { Text, useColorScheme, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Questions from '../screens/questions';
import headerOptions from '../styles/header';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: colorScheme === 'dark' ? styles.dark_footer : styles.light_footer,
        tabBarLabelStyle: { fontSize: 20, fontWeight: "bold" },
        tabBarActiveTintColor: colorScheme === 'dark' ? "white" : "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          tabBarIcon: () => null,
          tabBarLabel: ({ color }) => (
            <Text 
              style={{ 
                fontSize: 28, 
                fontFamily: "Lazy Dog", 
                color: color,
                textAlign: "center",
              }}
            >
              Home
            </Text>
          ),
          ...headerOptions("PHASMOWIKI"),
        }} 
      />
      <Tab.Screen 
        name="Q&A" 
        component={Questions} 
        options={{ 
          tabBarIcon: () => null,
          tabBarLabel: ({ color }) => (
            <Text 
              style={{ 
                fontSize: 28, 
                fontFamily: "Lazy Dog", 
                color: color,
                textAlign: "center",
              }}
            >
              Q&A
            </Text>
          ),
          ...headerOptions("Q&A"),
        }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  light_footer: {
    backgroundColor: "white",
    borderTopWidth: 0,
    elevation: 0,
  },
  dark_footer: {
    backgroundColor: "#1d1c1c",
    borderTopWidth: 0,
    elevation: 0,
  },
});
