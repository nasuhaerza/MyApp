import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function VolunteerHomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View style={styles.header}>

        <View style={styles.profileSection}>

          <Image
            source={{
              uri: 'https://i.pravatar.cc/150',
            }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.greeting}>
              Halo, Volunteer 👋
            </Text>

            <Text style={styles.subGreeting}>
              Mari ciptakan pendidikan
              yang lebih baik bersama.
            </Text>
          </View>

        </View>

        <TouchableOpacity>
          <Text style={styles.notification}>
            🔔
          </Text>
        </TouchableOpacity>

      </View>

      {/* SEARCH */}

      <TouchableOpacity style={styles.searchBar}>

        <Text style={styles.searchIcon}>
          🔍
        </Text>

        <Text style={styles.searchText}>
          Cari mata pelajaran atau sekolah...
        </Text>

      </TouchableOpacity>

      {/* STATS */}

      <View style={styles.statsContainer}>

        <View style={[styles.statCard, styles.blueCard]}>
          <Text style={styles.statTitle}>
            Total Request
          </Text>

          <Text style={styles.statValue}>
            24
          </Text>

          <Text style={styles.statInfo}>
            ↗ 12 baru hari ini
          </Text>
        </View>

        <View style={[styles.statCard, styles.greenCard]}>
          <Text style={styles.statTitle}>
            Telah Membantu
          </Text>

          <Text style={styles.statValue}>
            8
          </Text>

          <Text style={styles.statInfo}>
            ↗ 2 minggu ini
          </Text>
        </View>

        <View style={[styles.statCard, styles.purpleCard]}>
          <Text style={styles.statTitle}>
            Rating
          </Text>

          <Text style={styles.statValue}>
            4.8
          </Text>

          <Text style={styles.statInfo}>
            ⭐ Luar biasa
          </Text>
        </View>

      </View>

      {/* TITLE */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Request Terbaru
        </Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>

      {/* REQUEST CARD */}

      <View style={styles.requestCard}>

        <View style={styles.subjectIcon}>
          <Text style={styles.iconText}>
            📘
          </Text>
        </View>

        <View style={styles.requestContent}>

          <View style={styles.requestTop}>

            <Text style={styles.subject}>
              Matematika
            </Text>

            <View style={styles.urgentBadge}>
              <Text style={styles.badgeText}>
                Urgent
              </Text>
            </View>

          </View>

          <Text style={styles.school}>
            SMP Negeri 3 Kendari
          </Text>

          <Text style={styles.distance}>
            📍 2.1 km dari lokasi Anda
          </Text>

        </View>

      </View>

      {/* CARD 2 */}

      <View style={styles.requestCard}>

        <View style={styles.subjectIcon}>
          <Text style={styles.iconText}>
            📖
          </Text>
        </View>

        <View style={styles.requestContent}>

          <View style={styles.requestTop}>

            <Text style={styles.subject}>
              Bahasa Inggris
            </Text>

            <View style={styles.normalBadge}>
              <Text style={styles.normalText}>
                Sedang
              </Text>
            </View>

          </View>

          <Text style={styles.school}>
            SMA Negeri 1 Kendari
          </Text>

          <Text style={styles.distance}>
            📍 3.5 km dari lokasi Anda
          </Text>

        </View>

      </View>

      {/* MOTIVATION */}

      <View style={styles.banner}>

        <Text style={styles.bannerTitle}>
          Jadilah Inspirasi! 🎓
        </Text>

        <Text style={styles.bannerText}>
          Setiap waktu yang kamu berikan
          sangat berarti bagi masa depan mereka.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },

  subGreeting: {
    color: '#64748B',
    width: 220,
  },

  notification: {
    fontSize: 28,
  },

  searchBar: {
    marginTop: 25,
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {
    fontSize: 18,
  },

  searchText: {
    marginLeft: 10,
    color: '#94A3B8',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  statCard: {
    width: '31%',
    borderRadius: 20,
    padding: 16,
  },

  blueCard: {
    backgroundColor: '#EFF6FF',
  },

  greenCard: {
    backgroundColor: '#ECFDF5',
  },

  purpleCard: {
    backgroundColor: '#F3E8FF',
  },

  statTitle: {
    color: '#64748B',
    fontSize: 12,
  },

  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },

  statInfo: {
    marginTop: 10,
    color: '#2563EB',
    fontSize: 12,
  },

  sectionHeader: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
  },

  seeAll: {
    color: '#2563EB',
  },

  requestCard: {
    backgroundColor: '#FFF',
    marginTop: 16,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    elevation: 3,
  },

  subjectIcon: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#D1FAE5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconText: {
    fontSize: 26,
  },

  requestContent: {
    flex: 1,
    marginLeft: 15,
  },

  requestTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  subject: {
    fontSize: 18,
    fontWeight: '700',
  },

  school: {
    marginTop: 6,
    color: '#64748B',
  },

  distance: {
    marginTop: 8,
    color: '#94A3B8',
  },

  urgentBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50,
  },

  badgeText: {
    color: '#DC2626',
    fontWeight: '600',
  },

  normalBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50,
  },

  normalText: {
    color: '#D97706',
    fontWeight: '600',
  },

  banner: {
    marginTop: 25,
    marginBottom: 40,
    backgroundColor: '#E0F2FE',
    borderRadius: 24,
    padding: 20,
  },

  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  bannerText: {
    marginTop: 10,
    color: '#475569',
  },

});