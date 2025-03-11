import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const styles = StyleSheet.create ({
    button: {
        width: 60, 
        height: 24, 
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
});

export const BotonGhost = ({nombre = "default"}) => {
    
    return(
        <TouchableOpacity style={styles.button} onPress={() => alert(`Button ${nombre} Pressed!`)}>
            <Text style={styles.buttonText}>{nombre}</Text>
        </TouchableOpacity>
    )

}