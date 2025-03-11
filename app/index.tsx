import { Text, View, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Boton } from '../app/components/button'

function Home() {
  const colorScheme = useColorScheme();
  const stylesHome = {
    light_back : {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    dark_back : {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#222121",
    },
    styleView : { 
      marginTop: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      width: 260,
    }
  }

  return (
    <View
      style={colorScheme === 'dark' ? stylesHome.dark_back : stylesHome.light_back}
    >
      <View
        style={stylesHome.styleView}
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
  const colorScheme = useColorScheme();

  const stylesQuestions = {
    light_back : {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    dark_back : {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#222121",
    },
  }
  return (
    <View
      style={colorScheme === 'dark' ? stylesQuestions.dark_back : stylesQuestions.light_back}
    >
      <Text style={{ fontSize: 30 }}>Q&A</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Index() {
  const colorScheme = useColorScheme();

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
          headerTitle: "PhasmoWiki", 
          headerStyle: { 
            backgroundColor: "#1d1c1c", 
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
            backgroundColor: "#1d1c1c", 
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
};
