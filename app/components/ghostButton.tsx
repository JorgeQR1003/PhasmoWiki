import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useColorScheme } from "react-native";

const styles = StyleSheet.create ({
    light_button: {
        width: 160, 
        height: 50, 
        backgroundColor: "#222121",
        borderRadius: 10, 
        margin: 10, 
        overflow: "hidden"
    },
    light_buttonText: {
        marginTop: 5,
        color: "white",
        fontSize: 40,
        fontFamily: "Lazy Dog",
        zIndex: 1,
        justifyContent: "center",
        textAlign: "center",
    },
    dark_button: {
        width: 160, 
        height: 50, 
        backgroundColor: "#151414",
        borderRadius: 10, 
        margin: 10, 
        overflow: "hidden"
    },
    dark_buttonText: {
        marginTop: 5,
        color: "white",
        fontSize: 40,
        fontFamily: "Lazy Dog",
        zIndex: 1,
        justifyContent: "center",
        textAlign: "center",
    },
});

export const BotonGhost = ({nombre = "default"}) => {
    const colorScheme = useColorScheme();

    return(
        <TouchableOpacity style={colorScheme === 'dark' ? styles.dark_button : styles.light_button} onPress={() => alert(`Button ${nombre} Pressed!`)}>
            <Text style={colorScheme === 'dark' ? styles.dark_buttonText : styles.light_buttonText}>{nombre}</Text>
        </TouchableOpacity>
    )

}