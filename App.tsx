import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [screen, setScreen] = useState(0);

  if (screen === 0) {
    // Welcome Screen
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image
              source={require('./assets/logo.png')}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.title}>TOTP Sync</Text>
          <Text style={styles.subtitle}>Secure Authentication</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen(1)}>
            <Text style={styles.buttonText}>Let's Start →</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Setup Screen
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.content}>
        <Text style={styles.setupTitle}>Get Started</Text>
        <Text style={styles.setupSubtitle}>
          Choose how you want to add your accounts
        </Text>

        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionTitle}>Import Keys</Text>
            <Text style={styles.optionDesc}>
              From Google Authenticator, Authy, etc.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionTitle}>Add New Account</Text>
            <Text style={styles.optionDesc}>
              Scan QR code or enter manually
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logoImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#00cec9',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 16,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#00cec9',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  setupTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
  },
  setupSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 48,
  },
  optionsContainer: {
    width: '100%',
    gap: 16,
  },
  optionButton: {
    backgroundColor: '#00cec9',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#00cec9',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  optionDesc: {
    fontSize: 14,
    color: '#e0f7f6',
    textAlign: 'center',
  },
});

export default App;
