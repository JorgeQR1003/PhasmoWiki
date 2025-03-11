import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const styles = {
    button: {
      width: 280, 
      height: 110, 
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10, 
      margin: 10, 
      overflow: "hidden"
    },
    buttonText: {
      color: "white",
      fontSize: 25,
      fontFamily: "Lazy Dog",
    },
    image: {
      width: 280,
      height: 110,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.8,
    },
  };
  
  const images = {
    ghost: require('../../assets/images/ghost_button.jpg'),
    map: require('../../assets/images/map_button.jpg'),
    patch: require('../../assets/images/patch_button.jpg'),
    tip: require('../../assets/images/tip_button.jpg')
};

export const Boton = ({nombre = "default", imagen = "ghost"}) => {


return(
    <TouchableOpacity style={styles.button} onPress={() => alert(`Button ${nombre} Pressed!`)}>
        <ImageBackground
            source={images[imagen]}
            style={styles.image}
            resizeMode="cover"
        >
            <Text style={styles.buttonText}>{nombre}</Text>
        </ImageBackground>
    </TouchableOpacity>
)

}