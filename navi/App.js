/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import Deta from "./src/screen/Deta";
import Fıyat from "./src/screen/Fıyat";
import Iletısım from "./src/screen/Iletısım";


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Deta' component={Deta} />
        <Stack.Screen name='Fıyat' component={Fıyat} />
        <Stack.Screen name='Iletısım' component={Iletısım} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
