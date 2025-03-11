import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const styles = StyleSheet.create ({
    button: {
      width: 280, 
      height: 110, 
      backgroundColor: "black",
      borderRadius: 10, 
      margin: 10, 
      overflow: "hidden"
    },
    buttonText: {
      color: "white",
      fontSize: 25,
      fontFamily: "Lazy Dog",
      zIndex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay for the opacity effect
    },
  
  });
  
  const images: { [key : string] : any } = {
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
            <View style={styles.overlay}/>
            <Text style={styles.buttonText}>{nombre}</Text>
        </ImageBackground>
    </TouchableOpacity>
)

}