import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SetupScreen from './src/screens/SetupScreen';
import ChooseModeScreen from './src/screens/ChooseModeScreen';

enableScreens();

export type RootStackParamList = {
  Welcome: undefined;
  Setup: undefined;
  ChooseMode: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          animationDuration: 400,
        }}>
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="Setup" 
          component={SetupScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen 
          name="ChooseMode" 
          component={ChooseModeScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
