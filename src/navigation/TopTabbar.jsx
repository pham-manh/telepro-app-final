import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {TabBarData} from '../data/TabbarData';
import CommunityScreen from '../screens/CommunityScreen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
        },
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })}>
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <VectorIcon
              type="FontAwesome"
              name="users"
              color={color}
              size={20}
            />
          ),
        }}
      />
      {TabBarData.map(tab => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabbar;
