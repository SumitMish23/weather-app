import React from "react";
import ElegantHeader from "react-native-elegant-header";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

const Home = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  function handleButtonDisable() {
    if (text === "") {
      return true;
    } else {
      return false;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ElegantHeader
          title="Weather App"
          description="Type the country name to get relevant details"
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter Country"
        value={text}
      />
      <Button
        disabled={handleButtonDisable()}
        title="Submit"
        onPress={() =>
          navigation.navigate("CountryDetails", { countryName: `${text}` })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    padding: 40,
    position: "absolute",
    top: 0,
  },
  input: {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
    textAlign: "center",
  },
});
export default Home;
