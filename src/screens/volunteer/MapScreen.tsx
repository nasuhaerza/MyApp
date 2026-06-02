import React, { useEffect, useRef, useState } from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function MapsScreen() {
  const mapRef = useRef<MapView>(null);

  const [location, setLocation] = useState({
    latitude: -6.2,
    longitude: 106.816666,
  });
  const [loading, setLoading] = useState(true);

  const volunteerRequests = [
    {
      id: 1,
      title: 'Guru Matematika',
      description: 'SMP Negeri 3 Kendari',
      latitude: -3.9985,
      longitude: 122.5121,
    },
    {
      id: 2,
      title: 'Guru Bahasa Inggris',
      description: 'SMP Negeri 1 Kendari',
      latitude: -4.0015,
      longitude: 122.5180,
    },
  ];

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        setLoading(false);
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      error => {
        console.log(error);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  const centerToUser = () => {
    mapRef.current?.animateToRegion(
      {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      1000
    );
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      getCurrentLocation();
    }
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Mencari lokasi...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Peta Volunteer</Text>
        <Text style={styles.headerSubtitle}>
          Temukan sekolah yang membutuhkan bantuan
        </Text>
      </View>

      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location} title="Lokasi Anda" pinColor="blue" />

        {volunteerRequests.map(item => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.title}
            description={item.description}
            pinColor="red"
          />
        ))}
      </MapView>

      <TouchableOpacity style={styles.locationButton} onPress={centerToUser}>
        <Text style={styles.locationText}>📍 Lokasi Saya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
  },
  map: {
    flex: 1,
  },
  locationButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#2563EB',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
  },
  locationText: {
    color: '#fff',
    fontWeight: '600',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#64748B',
    marginTop: 4,
  },
});
