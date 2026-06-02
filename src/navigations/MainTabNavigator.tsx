import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { AuthContext } from '../context/AuthContext';
import SchoolTabNavigator from './SchoolTabNavigator';
import VolunteerTabNavigator from './VolunteerTabNavigator';

export default function MainTabNavigator() {
  const { role, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return role === 'school' ? (
    <SchoolTabNavigator />
  ) : (
    <VolunteerTabNavigator />
  );
}
