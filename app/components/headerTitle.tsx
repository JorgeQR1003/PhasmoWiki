import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface CustomHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const HeaderTitle = ({ title, showBackButton = true }: CustomHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showBackButton && navigation.canGoBack() && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Shlop",
    textAlign: "center",
  },
  headerContainer: {
    backgroundColor: "#1d1c1c",
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
});

export default HeaderTitle;
