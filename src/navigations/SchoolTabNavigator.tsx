import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import SchoolDashboardScreen from '../screens/school/SchoolDashboardScreen';
import CreateRequestScreen from '../screens/school/CreateRequestScreen';
import ProfileScreen from '../screens/shared/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function SchoolTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          switch (route.name) {
            case 'Dashboard':
              iconName = 'bar-chart';
              break;
            case 'Request':
              iconName = 'create';
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
        name="Dashboard"
        component={SchoolDashboardScreen}
        options={{ title: 'Dashboard' }}
      />

      <Tab.Screen
        name="Request"
        component={CreateRequestScreen}
        options={{ title: 'Buat Request' }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profil' }}
      />
    </Tab.Navigator>
  );
}
