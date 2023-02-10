import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryDetails from "./components/CountryDetails";
import WeatherDetails from "./components/WeatherDetails";
import Home from "./components/Home";

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
   
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CountryDetails" component={CountryDetails}/>
        <Stack.Screen name="WeatherDetails" component={WeatherDetails}/>

        </Stack.Navigator>

       </NavigationContainer>
   
  );
}


