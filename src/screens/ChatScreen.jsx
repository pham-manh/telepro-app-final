import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Wallpaper from '../assets/wallpaper.jpeg';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';
import ChatHeader from '../components/ChatHeader';

const Stack = createStackNavigator();

const ChatScreen = () => {
  return (
    <>
      <ChatHeader />
      <ImageBackground source={Wallpaper} style={styles.wallpaper}>
        <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 5,
  },
});
