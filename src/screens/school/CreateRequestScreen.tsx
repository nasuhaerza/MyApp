import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { supabase }
from '../../services/supabase/supabase';

export default function CreateRequestScreen() {

  const [subject, setSubject] =
    useState('');

  const [urgency, setUrgency] =
    useState('');

  const createRequest = async () => {

    const { error } =
      await supabase
        .from('volunteer_requests')
        .insert([
          {
            subject_needed: subject,
            urgency,
          },
        ]);

    if (error) {
      Alert.alert('Gagal');
      return;
    }

    Alert.alert('Request berhasil dibuat');
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Create Volunteer Request
      </Text>

      <TextInput
        placeholder="Subject Needed"
        value={subject}
        onChangeText={setSubject}
        style={styles.input}
      />

      <TextInput
        placeholder="Urgency"
        value={urgency}
        onChangeText={setUrgency}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={createRequest}
      >
        <Text style={styles.buttonText}>
          Submit Request
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});