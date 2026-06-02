import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function NotificationScreen() {
  const [selectedTab, setSelectedTab] =
    useState('all');

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <View>
            <Text style={styles.title}>
              Notifikasi
            </Text>

            <Text style={styles.subtitle}>
              Tetap update dengan aktivitas terbaru
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.markAll}>
              Tandai semua dibaca
            </Text>
          </TouchableOpacity>

        </View>

        {/* FILTER */}

        <View style={styles.filterContainer}>

          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedTab === 'all' &&
                styles.activeFilter,
            ]}
            onPress={() =>
              setSelectedTab('all')
            }
          >
            <Text
              style={[
                styles.filterText,
                selectedTab === 'all' &&
                  styles.activeText,
              ]}
            >
              Semua
            </Text>

            <View style={styles.blueBadge}>
              <Text style={styles.badgeNumber}>
                12
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
          >
            <Text style={styles.filterText}>
              Belum Dibaca
            </Text>

            <View style={styles.blueBadge}>
              <Text style={styles.badgeNumber}>
                5
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
          >
            <Text style={styles.filterText}>
              Penting
            </Text>

            <View style={styles.redBadge}>
              <Text style={styles.badgeNumber}>
                3
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        {/* BARU */}

        <Text style={styles.sectionTitle}>
          Baru 🔴
        </Text>

        <NotificationCard
          icon="🔔"
          title="Request Baru Masuk"
          description="SMP Negeri 3 Kendari membutuhkan volunteer Matematika."
          time="2 menit yang lalu"
          unread
        />

        <NotificationCard
          icon="✅"
          title="Request Diterima"
          description="Permintaan Anda telah diterima oleh sekolah."
          time="15 menit yang lalu"
          unread
        />

        <NotificationCard
          icon="💬"
          title="Pesan Baru dari Sekolah"
          description="SMP Negeri 12 mengirim pesan terkait request IPA."
          time="1 jam yang lalu"
          unread
        />

        {/* SEBELUMNYA */}

        <Text style={styles.sectionTitle}>
          Sebelumnya
        </Text>

        <NotificationCard
          icon="⭐"
          title="Terima Kasih!"
          description="Sekolah memberikan rating 5⭐ untuk bantuan Anda."
          time="3 jam yang lalu"
        />

        <NotificationCard
          icon="📅"
          title="Jadwal Disetujui"
          description="Jadwal volunteer Anda telah disetujui."
          time="1 hari yang lalu"
        />

        <NotificationCard
          icon="📢"
          title="Pengumuman"
          description="Training volunteer baru akan diadakan minggu depan."
          time="2 hari yang lalu"
        />

      </ScrollView>

    </View>
  );
}

function NotificationCard({
  icon,
  title,
  description,
  time,
  unread = false,
}: any) {
  return (
    <TouchableOpacity style={styles.card}>

      <View style={styles.iconBox}>
        <Text style={styles.icon}>
          {icon}
        </Text>
      </View>

      <View style={styles.content}>

        <View style={styles.topRow}>

          <Text style={styles.cardTitle}>
            {title}
          </Text>

          {unread && (
            <View style={styles.unreadDot} />
          )}

        </View>

        <Text style={styles.description}>
          {description}
        </Text>

        <Text style={styles.time}>
          🕒 {time}
        </Text>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F172A',
  },

  subtitle: {
    color: '#64748B',
    marginTop: 6,
  },

  markAll: {
    color: '#2563EB',
    marginTop: 10,
    fontWeight: '600',
  },

  filterContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    gap: 10,
  },

  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 30,
  },

  activeFilter: {
    backgroundColor: '#DBEAFE',
  },

  filterText: {
    fontWeight: '600',
    color: '#334155',
  },

  activeText: {
    color: '#2563EB',
  },

  blueBadge: {
    backgroundColor: '#2563EB',
    borderRadius: 20,
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  redBadge: {
    backgroundColor: '#EF4444',
    borderRadius: 20,
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  badgeNumber: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#0F172A',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    elevation: 3,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 28,
  },

  content: {
    flex: 1,
    marginLeft: 15,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },

  description: {
    marginTop: 6,
    color: '#64748B',
    lineHeight: 22,
  },

  time: {
    marginTop: 10,
    color: '#94A3B8',
  },

  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2563EB',
    marginTop: 8,
  },

});