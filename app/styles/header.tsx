import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const headerOptions = (title : string) => ({
    headerTitle: title,
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
  });

  export default headerOptions;