import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { supabase } from '../../services/supabase/supabase';

export default function RegisterScreen({ navigation }: any) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
  };

  const handleRegister = async () => {
    if (!selectedRole) {
      Alert.alert('Error', 'Pilih role terlebih dahulu');
      return;
    }

    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan konfirmasi password tidak cocok');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      Alert.alert('Register Gagal', error.message);
      return;
    }

    const authUser = data.user;

    if (!authUser) {
      setLoading(false);
      Alert.alert('Register Gagal', 'Gagal membuat akun. Silakan coba lagi.');
      return;
    }

    const { error: insertError } = await supabase.from('users').insert([
      {
        auth_id: authUser.id,
        full_name: fullName,
        email,
        role: selectedRole,
      },
    ]);

    if (insertError) {
      setLoading(false);
      Alert.alert('Register Gagal', insertError.message);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      Alert.alert('Berhasil', `Akun ${selectedRole} berhasil dibuat. Silakan login.` , [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <View style={styles.container}>
      {!selectedRole ? (
        <>
          <Text style={styles.title}>Daftar sebagai</Text>

          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSelectRole('volunteer')}
          >
            <Text style={styles.cardText}>Volunteer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSelectRole('school')}
          >
            <Text style={styles.cardText}>Sekolah</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>
            Register {selectedRole === 'school' ? 'Sekolah' : 'Volunteer'}
          </Text>

          <TextInput
            placeholder="Nama Lengkap"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <TextInput
            placeholder="Konfirmasi Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Daftar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setSelectedRole(null)}
          >
            <Text style={styles.secondaryText}>Pilih role lain</Text>
          </TouchableOpacity>
        </>
      )}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});
