import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import VolunteerHomeScreen from '../screens/volunteer/VolunteerHomeScreen';
import MapScreen from '../screens/volunteer/MapScreen';
import NotificationScreen from '../screens/volunteer/NotificationScreen';
import ProfileScreen from '../screens/volunteer/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function VolunteerTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Maps':
              iconName = 'map';
              break;
            case 'Notifications':
              iconName = 'notifications';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 10,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={VolunteerHomeScreen}
        options={{ title: 'Beranda' }}
      />

      <Tab.Screen
        name="Maps"
        component={MapScreen}
        options={{ title: 'Peta' }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{ title: 'Notifikasi' }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profil' }}
      />
    </Tab.Navigator>
  );
}
