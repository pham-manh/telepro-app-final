import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import CallListScreen from '../screens/CallListScreen';
import ChatListScreen from '../screens/ChatListScreen';
import CommunityListScreen from '../screens/CommunityListScreen';
import StatusListScreen from '../screens/StatusListScreen';
import {Colors} from '../theme/Colors';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.tertiary,
      })}>
      <Tab.Screen name="CommunityScreen" component={CommunityListScreen} />
      <Tab.Screen name="ChatListScreen" component={ChatListScreen} />
      <Tab.Screen name="CallListScreen" component={CallListScreen} />
      <Tab.Screen name="StatusListScreen" component={StatusListScreen} />
    </Tab.Navigator>
  );
};

export default TopTabbar;
