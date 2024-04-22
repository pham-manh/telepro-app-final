import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ContactListData} from '../data/ContactListData';
import {Colors} from '../theme/Colors';

const ContactList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts on Telepro</Text>
      {ContactListData.map(item => (
        <View style={styles.contactContainer}>
          <Image source={item.userImg} style={styles.imgStyle} />
          <Text style={styles.username}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    flex: 1,
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 16,
    color: Colors.textColor,
    marginLeft: 15,
  },
  title: {
    fontSize: 12,
    color: Colors.textGrey,
    marginVertical: 5,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default ContactList;
