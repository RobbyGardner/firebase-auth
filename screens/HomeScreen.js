import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { auth } from "../firebase";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email} </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#B0DAC2",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0DAC2",
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
  },
});
