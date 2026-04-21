// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* HALAMAN 1 */

function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Education Volunteer Scout
      </Text>

      <Text style={styles.subtitle}>
        Tentang Volunteer
      </Text>

      <Text style={styles.text}>
        Education Volunteer Scout adalah program relawan
        yang membantu anak-anak mendapatkan pendidikan
        yang lebih baik melalui kegiatan belajar.
      </Text>

      <Text style={styles.subtitle}>
        Tujuan Kami
      </Text>

      <Text style={styles.text}>📚 Membantu pendidikan anak</Text>
      <Text style={styles.text}>🌱 Mengembangkan keterampilan</Text>
      <Text style={styles.text}>🎯 Meningkatkan semangat belajar</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Activities')}
      >
        <Text style={styles.buttonText}>
          Lihat Kegiatan
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

/* HALAMAN 2 */

function ActivitiesScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Kegiatan Volunteer
      </Text>

      <Text style={styles.text}>📖 Mengajar membaca</Text>
      <Text style={styles.text}>✏️ Menulis kreatif</Text>
      <Text style={styles.text}>🔢 Matematika dasar</Text>
      <Text style={styles.text}>💻 Pengenalan komputer</Text>
      <Text style={styles.text}>🎨 Seni dan kreativitas</Text>
      <Text style={styles.text}>🌍 Edukasi lingkungan</Text>
      <Text style={styles.text}>🧪 Eksperimen sains</Text>
      <Text style={styles.text}>🗣️ Bahasa Inggris dasar</Text>
      <Text style={styles.text}>📚 Storytelling edukasi</Text>
      <Text style={styles.text}>🏕️ Kegiatan pramuka edukatif</Text>

    </ScrollView>
  );
}

/* NAVIGATION */

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Activities"
          component={ActivitiesScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

/* STYLE */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2E7D32',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#2E7D32',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});