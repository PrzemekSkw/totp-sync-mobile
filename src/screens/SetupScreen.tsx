import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Setup'>;
};

function SetupScreen({ navigation }: Props) {
  const fadeAnim = new Animated.Value(0);
  const slideAnim1 = new Animated.Value(50);
  const slideAnim2 = new Animated.Value(50);

  useEffect(() => {
    // Staggered animation - elementy pojawiają się jeden po drugim
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(slideAnim1, {
          toValue: 0,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim2, {
          toValue: 0,
          delay: 100,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.setupTitle}>Get Started</Text>
        <Text style={styles.setupSubtitle}>
          Choose how you want to add your accounts
        </Text>

        <View style={styles.optionsContainer}>
          <Animated.View
            style={{
              transform: [{ translateY: slideAnim1 }],
              opacity: fadeAnim,
            }}>
            <TouchableOpacity
              style={styles.optionButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ChooseMode')}>
              <Text style={styles.optionTitle}>Import Keys</Text>
              <Text style={styles.optionDesc}>
                From Google Authenticator, Authy, etc.
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{
              transform: [{ translateY: slideAnim2 }],
              opacity: fadeAnim,
            }}>
            <TouchableOpacity
              style={styles.optionButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ChooseMode')}>
              <Text style={styles.optionTitle}>Add New Account</Text>
              <Text style={styles.optionDesc}>
                Scan QR code or enter manually
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
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
  optionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  optionButton: {
    backgroundColor: '#00cec9',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#00cec9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  optionDesc: {
    fontSize: 14,
    color: '#e0f7f6',
    textAlign: 'center',
  },
});

export default SetupScreen;
