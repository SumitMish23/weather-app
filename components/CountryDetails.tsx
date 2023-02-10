import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
const CountryDetails = ({ navigation,route }) => {

    // Hooks to store country data which is being fetched by the fetchData function.
  const [data, setData] = useState([]);

   //   country name which is being passed as a prop from Home Component
  const country:string = route.params.countryName;
  

  //  Function to fetch Weather Details
  const fetchData = async () => {
    const resp = await fetch(
      `https://restcountries.com/v3.1/name/${country.toLowerCase()}`
    );
    const data = await resp.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: data[0]?.flags.png,
          }}
        />
        <Text style={styles.capitalText}>Capital : {data[0]?.capital[0]}</Text>
        <Text style={styles.capitalText}>
          Population : {data[0]?.population.toLocaleString("en-US")}
        </Text>
        <Text style={styles.latitude}>Latitude: {data[0]?.latlng[0]} deg</Text>
        <Text style={styles.latitude}>Longitude: {data[0]?.latlng[1]} deg</Text>
        <View style={styles.submitButton}>
          <Button title="Capital Weather" 
          onPress={() =>
            navigation.navigate("WeatherDetails", { capital: `${data[0]?.capital[0]}` })
          }/>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    padding: 0,
  },
  image: {
    width: 300,
    height: 300,
    margin: 12,
  },
  capitalText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 10,
    paddingLeft: 10,
  },
  latitude: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 10,
    paddingLeft: 10,
  },
  submitButton: {
    marginLeft: 10,
    marginTop: 20,
  },
});
export default CountryDetails;
