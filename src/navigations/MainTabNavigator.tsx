import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapsScreen from '../screens/shared/MapsScreen';

import VolunteerHomeScreen from '../screens/volunteer/VolunteerHomeScreen';
import NotificationScreen from '../screens/shared/NotificationScreen';
import ProfileScreen from '../screens/shared/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name="Home"
        component={VolunteerHomeScreen}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
      />

    </Tab.Navigator>
  );
}