import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { supabase } from '../../services/supabase/supabase';

export default function ProfileScreen() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert('Logout Gagal', error.message);
      return;
    }

    Alert.alert('Berhasil Logout', 'Anda telah keluar dari akun.');
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View style={styles.header}>

        <Image
          source={{
            uri: 'https://i.pravatar.cc/300',
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Nasuha Erza
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            ✓ Sukarelawan Terverifikasi
          </Text>
        </View>

        <Text style={styles.rating}>
          ⭐ 4.8 (128 ulasan)
        </Text>

      </View>

      {/* STATISTICS */}

      <View style={styles.statsContainer}>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            1250
          </Text>

          <Text style={styles.statLabel}>
            Menit Volunteer
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            8
          </Text>

          <Text style={styles.statLabel}>
            Sekolah Dibantu
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            24
          </Text>

          <Text style={styles.statLabel}>
            Request Selesai
          </Text>
        </View>

      </View>

      {/* INFORMASI */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          👤 Informasi Pribadi
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>
            Nasuha Erza
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>
            nasuha@email.com
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Lokasi</Text>
          <Text style={styles.value}>
            Kendari
          </Text>
        </View>

      </View>

      {/* SKILLS */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          📚 Keahlian & Subjek
        </Text>

        <View style={styles.skillsContainer}>

          <View style={styles.skill}>
            <Text>Matematika</Text>
          </View>

          <View style={styles.skill}>
            <Text>Bahasa Inggris</Text>
          </View>

          <View style={styles.skill}>
            <Text>Sains</Text>
          </View>

        </View>

      </View>

      {/* JADWAL */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          📅 Jadwal Ketersediaan
        </Text>

        <Text style={styles.schedule}>
          Senin - Jumat
        </Text>

        <Text style={styles.scheduleTime}>
          16:00 - 20:00
        </Text>

      </View>

      {/* ACHIEVEMENT */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          🏆 Lencana Prestasi
        </Text>

        <View style={styles.achievementContainer}>

          <View style={styles.achievement}>
            <Text style={styles.emoji}>
              🥇
            </Text>

            <Text>Pemula Hebat</Text>
          </View>

          <View style={styles.achievement}>
            <Text style={styles.emoji}>
              ⭐
            </Text>

            <Text>Bantuan Terbaik</Text>
          </View>

          <View style={styles.achievement}>
            <Text style={styles.emoji}>
              🤝
            </Text>

            <Text>Kolaborator</Text>
          </View>

        </View>

      </View>

      {/* HISTORY */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          📖 Riwayat Sukarelawan
        </Text>

        <View style={styles.historyItem}>
          <Text style={styles.school}>
            SMP Negeri 3 Kendari
          </Text>

          <Text style={styles.subject}>
            Mengajar Matematika
          </Text>
        </View>

        <View style={styles.historyItem}>
          <Text style={styles.school}>
            SDN 12 Kendari
          </Text>

          <Text style={styles.subject}>
            Mengajar Bahasa Inggris
          </Text>
        </View>

      </View>

      {/* LOGOUT */}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  header: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 25,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    marginTop: 15,
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
  },

  badge: {
    marginTop: 10,
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 50,
  },

  badgeText: {
    color: '#2563EB',
    fontWeight: '600',
  },

  rating: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  statCard: {
    width: '31%',
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2563EB',
  },

  statLabel: {
    textAlign: 'center',
    marginTop: 8,
    color: '#64748B',
  },

  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 24,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
  },

  infoRow: {
    marginBottom: 12,
  },

  label: {
    color: '#64748B',
  },

  value: {
    marginTop: 4,
    fontWeight: '600',
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  skill: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  schedule: {
    fontSize: 18,
    fontWeight: '600',
  },

  scheduleTime: {
    marginTop: 5,
    color: '#64748B',
  },

  achievementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  achievement: {
    alignItems: 'center',
    width: '30%',
  },

  emoji: {
    fontSize: 32,
    marginBottom: 10,
  },

  historyItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },

  school: {
    fontWeight: '700',
    fontSize: 16,
  },

  subject: {
    marginTop: 4,
    color: '#64748B',
  },

  logoutButton: {
    margin: 20,
    backgroundColor: '#EF4444',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },

  logoutText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },

});