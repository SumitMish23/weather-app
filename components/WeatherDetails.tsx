import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
const WeatherDetails = ({ route }) => {
  const capital:string = route.params.capital;

  const [weatherData, setWeatherData] = useState();

  async function fetchWeatherDetails() {
    const resp = await fetch(
      `http://api.weatherstack.com/current?access_key=44e5662ae5805a7616b0ab290574e70f&query=${capital}`
    );
    const data = await resp.json();
    setWeatherData(data.current);
  }
  useEffect(() => {
    fetchWeatherDetails();
  }, []);
 
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/weather.png")} />
        <View>
          <Text style={styles.text}>
            Temperature : { weatherData?.temperature}°C
          </Text>
          <Text style={styles.text}>
            Precipitation : {weatherData?.precip}
          </Text>
          <Text style={styles.text}>
            Wind Speed : {weatherData?.wind_speed} m/s{" "}
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 20,
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default WeatherDetails;
