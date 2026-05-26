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

import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
 ScrollView,
 StyleSheet,
 TouchableOpacity,
 TextInput,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* HALAMAN LOGIN */
function LoginScreen({ navigation }: any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (email === 'admin@gmail.com' && password === '123456') {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Login Gagal',
        'Email atau password salah'
      );
    }
  };

  return (

    <View style={styles.loginContainer}>

      <Text style={styles.loginTitle}>
        Education Volunteer Scout
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <Text style={styles.loginInfo}>
        Email: admin@gmail.com
      </Text>

      <Text style={styles.loginInfo}>
        Password: 123456
      </Text>

    </View>
  );
}

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

  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setVolunteers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Volunteer Activities
      </Text>

      <Text style={styles.subtitle}>
        Data Volunteer dari API
      </Text>

      {loading ? (
        <Text style={styles.text}>Loading data...</Text>
      ) : (
        volunteers.map((item: any) => (
          <View key={item.id} style={styles.card}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.text}>
              📧 {item.email}
            </Text>

            <Text style={styles.text}>
              📞 {item.phone}
            </Text>

            <Text style={styles.text}>
              🌍 {item.website}
            </Text>

          </View>
        ))
      )}

    </ScrollView>
  );
}

/* NAVIGATION */

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
            name="Login"
            component={LoginScreen}
        />
        
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

  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1B5E20',
  },

  loginContainer: {
  flex: 1,
  justifyContent: 'center',
  padding: 25,
  backgroundColor: '#E8F5E9',
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1B5E20',
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  loginInfo: {
    textAlign: 'center',
    marginTop: 10,
    color: 'gray',
  },

});