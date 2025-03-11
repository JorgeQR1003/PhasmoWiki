import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Boton } from '../app/components/button'

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: 260,
        }}
      >
        <Boton 
          nombre = "Ghost"
          imagen = "ghost"
        />
        <Boton 
          nombre = "Maps"
          imagen = "map"
        />
        <Boton 
          nombre = "Patch Notes"
          imagen = "patch"
        />
        <Boton 
          nombre = "Tips"
          imagen = "tip"
        />
      </View>
    </View>
  );
}

function Questions() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Q&A</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Index() {
  const [fontsLoaded] = useFonts({
    Shlop: require("../assets/fonts/shlop.otf"),
    LazyDog: require("../assets/fonts/lazy_dog.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.footer,
        tabBarLabelStyle: { fontSize: 20, fontWeight: "bold" },
        tabBarActiveTintColor: "black",
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
          headerTitle: "PhasmoWiki", 
          headerStyle: { 
            backgroundColor: "#222", 
            height: 80, 
          }, 
          headerTitleStyle: { 
            fontSize: 48, 
            fontWeight: "bold", 
            color: "white", 
            fontFamily: "Shlop", 
            textAlign: "center", 
          },
          headerTitleAlign: "center", 
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
          headerTitle: "Q&A", 
          headerStyle: { 
            backgroundColor: "#222", 
            height: 80, 
          }, 
          headerTitleStyle: { 
            fontSize: 48, 
            fontWeight: "bold", 
            color: "white", 
            fontFamily: "Shlop", 
            textAlign: "center", 
          },
          headerTitleAlign: "center", 
        }} 
      />
    </Tab.Navigator>
  );
}

const styles = {
  footer: {
    backgroundColor: "white",
    borderTopWidth: 0,
    elevation: 0,
  },
};
