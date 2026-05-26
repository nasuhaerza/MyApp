import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function SchoolDashboardScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Dashboard Sekolah
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>
          Request Aktif
        </Text>

        <Text style={styles.number}>
          4
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 24,
  },

  title: {
    fontSize: 18,
    color: '#64748B',
  },

  number: {
    marginTop: 12,
    fontSize: 40,
    fontWeight: 'bold',
  },
});