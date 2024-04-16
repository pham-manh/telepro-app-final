import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import TopTabbar from '../navigation/TopTabbar';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <TopTabbar />
    </View>
  );
};

export default HomeScreen;
