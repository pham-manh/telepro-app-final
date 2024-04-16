/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import TopTabbar from './src/navigation/TopTabbar';
import HomeScreen from './src/screens/HomeScreen';
import { Colors } from './src/theme/Colors';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <HomeScreen /> 
      <TopTabbar/>
    </NavigationContainer>
  );
}
export default App;