import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import HotelReservationsScreen from '../screens/HotelReservations';
import FAQScreen from '../screens/FAQ';
import ContactScreen from '../screens/Contact';
import {navigationRef} from './NavigationService';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="HotelReservations"
          component={HotelReservationsScreen}
        />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
