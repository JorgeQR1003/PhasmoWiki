import { Text, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { useColorScheme } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create ({
    light_button: {
        width: 160, 
        height: 50, 
        backgroundColor: "#222121",
        borderRadius: 10, 
        margin: 10, 
        overflow: "hidden",
        
    },
    light_button_hover: {
        backgroundColor: "white",
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
    light_buttonText_hover: {
        color: "#222121",
        textDecorationLine: "underline",
    },
    dark_button: {
        width: 160, 
        height: 50, 
        backgroundColor: "#151414",
        borderRadius: 10, 
        margin: 10, 
        overflow: "hidden"
    },
    dark_button_hover: {
        backgroundColor: "white",
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
    dark_buttonText_hover: {
        color: "black",
        textDecorationLine: "underline",
    },
});

export const BotonGhost = ({nombre = "default"}) => {
    const colorScheme = useColorScheme();

    const [isPressed, setIsPressed] = useState(false);

    return(
        <Pressable  
        style={({ pressed }) => [
            colorScheme === 'dark'
              ? [styles.dark_button, pressed && styles.dark_button_hover]
              : [styles.light_button, pressed && styles.light_button_hover],
          ]}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={() => alert(`Button ${nombre} Pressed!`)}>
            <Text 
                style={[
                    colorScheme === 'dark'
                      ? [ 
                            styles.dark_buttonText, 
                            isPressed && styles.dark_buttonText_hover 
                        ]
                      : [
                          styles.light_buttonText,
                          isPressed && styles.light_buttonText_hover,
                        ],
                  ]}
            >{nombre}</Text>
        </Pressable>
    )
}