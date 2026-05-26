import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { supabase } from '../../services/supabase/supabase';

export default function ProfileScreen() {

  const handleLogout = async () => {

    const { error } =
      await supabase.auth.signOut();

    if (error) {
      Alert.alert('Logout Gagal');
      return;
    }

    Alert.alert('Berhasil Logout');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.name}>
        Nasuha Erza
      </Text>

      <Text style={styles.role}>
        Volunteer
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  role: {
    marginTop: 10,
    fontSize: 18,
    color: '#64748B',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});