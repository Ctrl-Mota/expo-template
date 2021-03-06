import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Start, Wallet } from '../screens';
import { NavigatorProps, StartOptions, WalletOptions } from './customOptions';

const Stack = createStackNavigator();

TouchableOpacity.defaultProps = {
  ...(TouchableOpacity.defaultProps || {}),
  delayPressIn: 0,
};

export const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator {...NavigatorProps}>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ ...StartOptions }}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{ ...WalletOptions }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
