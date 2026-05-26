import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Notifications
      </Text>

      <View style={styles.card}>
        <Text>
          Sekolah Harapan membutuhkan guru Inggris.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
  },
});