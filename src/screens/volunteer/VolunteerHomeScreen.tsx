import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { RequestContext }
from '../../context/RequestContext';

import { supabase }
from '../../services/supabase/supabase';

export default function VolunteerHomeScreen() {

  const { requests } =
    useContext(RequestContext);

  const acceptRequest = async (
    requestId: string,
  ) => {

    const { error } =
      await supabase
        .from('volunteer_requests')
        .update({
          status: 'accepted',
        })
        .eq('id', requestId);

    if (error) {
      Alert.alert(
        'Gagal menerima request'
      );
      return;
    }

    Alert.alert(
      'Berhasil menerima request'
    );
  };

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.header}>
        Halo Volunteer 👋
      </Text>

      {
        requests.length === 0 ? (

          <Text style={styles.empty}>
            Belum ada volunteer request
          </Text>

        ) : (

          requests.map((item: any) => (

            <View
              key={item.id}
              style={styles.card}
            >

              <Text style={styles.title}>
                {item.subject_needed}
              </Text>

              <Text style={styles.subtitle}>
                {item.urgency}
              </Text>

              <TouchableOpacity
                style={styles.acceptButton}
                onPress={() =>
                  acceptRequest(item.id)
                }
              >

                <Text style={styles.acceptText}>
                  Accept
                </Text>

              </TouchableOpacity>

            </View>

          ))
        )
      }

    </ScrollView>
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

  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#64748B',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  subtitle: {
    marginTop: 8,
    color: '#64748B',
  },

  acceptButton: {
    marginTop: 16,
    backgroundColor: '#10B981',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  acceptText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});