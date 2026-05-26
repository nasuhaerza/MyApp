import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import MapView, {
  Marker,
} from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';

export default function MapsScreen() {

  const [location, setLocation] = useState({
    latitude: -6.2,
    longitude: 106.816666,
  });

  const requestLocationPermission =
    async () => {

      if (Platform.OS === 'android') {

        const granted =
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );

        if (
          granted ===
          PermissionsAndroid.RESULTS.GRANTED
        ) {
          getCurrentLocation();
        }
      }
    };

  const getCurrentLocation = () => {

    Geolocation.getCurrentPosition(
      position => {

        setLocation({
          latitude:
            position.coords.latitude,

          longitude:
            position.coords.longitude,
        });
      },

      error => {
        console.log(error);
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >

        <Marker
          coordinate={location}
          title="Lokasi Anda"
        />

      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

});