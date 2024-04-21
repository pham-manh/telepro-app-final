import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.LogoStyle}>Telopro</Text>
      <View style={styles.headerIcon}>
        <VectorIcon
          name="camera"
          type="Feather"
          size={25}
          color={Colors.white}
          style={styles.iconStyle}
        />
        <VectorIcon
          name="search"
          type="Feather"
          size={25}
          color={Colors.white}
          style={styles.iconStyle}
        />
        <VectorIcon
          name="dots-three-vertical"
          type="Entypo"
          size={23}
          color={Colors.white}
          style={styles.iconStyle}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LogoStyle: {
    height: 30,
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconStyle: {
    marginHorizontal: 10,
  },
  headerIcon: {
    padding: 5,
    flexDirection: 'row',
  },
};
export default Header;
