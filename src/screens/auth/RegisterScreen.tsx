import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { supabase }
from '../../services/supabase/supabase';

export default function RegisterScreen() {

  const [selectedRole, setSelectedRole] =
    useState('');

  const handleRegister = async (
    role: string,
  ) => {

    setSelectedRole(role);

    const email =
      `${role}${Date.now()}@gmail.com`;

    const password =
      '12345678';

    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {
      Alert.alert(
        'Register Gagal',
        error.message
      );
      return;
    }

    const authUser =
      data.user;

    await supabase
      .from('users')
      .insert([
        {
          auth_id: authUser?.id,
          full_name: 'Nasuha Erza',
          email: authUser?.email,
          role,
        },
      ]);

    Alert.alert(
      'Berhasil',
      `Register sebagai ${role}`
    );
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Pilih Role
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          handleRegister('volunteer')
        }
      >

        <Text style={styles.cardText}>
          Volunteer
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          handleRegister('school')
        }
      >

        <Text style={styles.cardText}>
          Sekolah
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#EFF6FF',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
  },

  cardText: {
    fontSize: 18,
    fontWeight: '600',
  },

});