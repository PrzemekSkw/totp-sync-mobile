import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ChooseMode'>;
};

function ChooseModeScreen({navigation}: Props) {
  const fadeAnim = new Animated.Value(0);
  const slideAnim1 = new Animated.Value(50);
  const slideAnim2 = new Animated.Value(50);

  useEffect(() => {
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
        <Text style={styles.title}>Choose Your Mode</Text>
        <Text style={styles.subtitle}>
          How would you like to use TOTP Sync?
        </Text>

        <View style={styles.optionsContainer}>
          {/* Offline Mode */}
          <Animated.View
            style={{
              transform: [{translateY: slideAnim1}],
              opacity: fadeAnim,
            }}>
            <TouchableOpacity
              style={[styles.optionButton, styles.offlineButton]}
              activeOpacity={0.8}
              onPress={() => {
                // TODO: Navigate to PIN Setup
                console.log('Use Offline');
              }}>
              <Text style={styles.optionIcon}>📱</Text>
              <Text style={styles.optionTitle}>USE OFFLINE</Text>
              <Text style={styles.optionDesc}>
                Store codes locally on your device{'\n'}
                No account required
              </Text>
              <View style={styles.featureList}>
                <Text style={styles.feature}>✓ 100% Private</Text>
                <Text style={styles.feature}>✓ No Internet Needed</Text>
                <Text style={styles.feature}>✓ Protected by PIN</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>

          {/* Cloud Sync Mode */}
          <Animated.View
            style={{
              transform: [{translateY: slideAnim2}],
              opacity: fadeAnim,
            }}>
            <TouchableOpacity
              style={[styles.optionButton, styles.cloudButton]}
              activeOpacity={0.8}
              onPress={() => {
                // TODO: Navigate to Auth (Login/Register)
                console.log('Sign In / Register');
              }}>
              <Text style={styles.optionIcon}>☁️</Text>
              <Text style={styles.optionTitle}>SIGN IN / REGISTER</Text>
              <Text style={styles.optionDesc}>
                Sync across all your devices{'\n'}
                Encrypted cloud backup
              </Text>
              <View style={styles.featureList}>
                <Text style={styles.feature}>✓ Multi-Device Sync</Text>
                <Text style={styles.feature}>✓ Automatic Backup</Text>
                <Text style={styles.feature}>✓ Web Access</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Text style={styles.note}>
          💡 You can enable sync later in settings
        </Text>
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
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    flex: 1,
    gap: 20,
  },
  optionButton: {
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  offlineButton: {
    backgroundColor: '#6366f1',
  },
  cloudButton: {
    backgroundColor: '#00cec9',
  },
  optionIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 1,
  },
  optionDesc: {
    fontSize: 14,
    color: '#e0f7f6',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  featureList: {
    gap: 6,
    alignItems: 'flex-start',
    width: '100%',
  },
  feature: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '600',
  },
  note: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'center',
    paddingVertical: 20,
  },
});

export default ChooseModeScreen;
