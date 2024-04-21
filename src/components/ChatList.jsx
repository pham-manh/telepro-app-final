import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChatListData} from '../data/ChatListData';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';

const ChatList = () => {
  const navigation = useNavigation();

  const onNavigatePress = () => {
    navigation.navigate('ChatScreen');
  };
  return (
    <>
      {ChatListData.map(chatItem => (
        <View key={chatItem.id} style={styles.container}>
          <TouchableOpacity
            onPress={onNavigatePress}
            style={styles.leftContainer}>
            <Image style={styles.profileImg} source={chatItem.profile}></Image>
            <View>
              <Text style={styles.username}>{chatItem.name}</Text>
              <Text style={styles.message}> {chatItem.message}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.rightContainer}>
            <Text style={styles.timeStamp}>{chatItem.time}</Text>
            {chatItem.mute ? (
              <VectorIcon
                type="MaterialCommunityIcons"
                name="volume-variant-off"
                size={22}
                color={Colors.textGrey}></VectorIcon>
            ) : (
              <></>
            )}
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    borderRadius: 50,
    height: 40,
    width: 40,
    marginRight: 15,
  },
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  username: {
    color: Colors.textColor,
    fontSize: 16,
  },
  message: {
    color: Colors.textGrey,
    fontSize: 14,
    marginTop: 5,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize: 12,
  },
  muteIcon: {
    marginTop: 5,
    marginLeft: 20,
  },
});

export default ChatList;
