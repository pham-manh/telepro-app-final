import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ChatList from '../components/ChatList';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList />
      </ScrollView>

      <TouchableOpacity style={styles.contactIcon}>
        <VectorIcon
          name="message-reply-text"
          type="MaterialCommunityIcons"
          size={22}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.background,
    flex: 1,
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default ChatListScreen;
