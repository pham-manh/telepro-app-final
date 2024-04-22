import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ContactHeader from '../components/ContactHeader';
import ContactList from '../components/ContactList';
import {Colors} from '../theme/Colors';

const ContactScreen = () => {
  return (
    <ScrollView style={styles.scrollViewStyle}>
      <ContactHeader />
      <ContactList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor: Colors.background,
  },
});

export default ContactScreen;
