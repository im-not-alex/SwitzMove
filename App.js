/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListTravels from './views/ListTravels/ListTravels';
import DetailsTravel from './views/DetailsTravel/DetailsTravel';
import Home from './views/Home/Home';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'home'}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Live times',
            headerTransparent: 'true',
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fffafa',
              fontSize: 32,
              textShadowColor: '#000000',
              textShadowRadius: 18,
            },
          }}
        />
        <Stack.Screen
          name="listTravels"
          component={ListTravels}
          options={{
            title: 'Choose outbound',
            headerTransparent: 'true',
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              color: '#fffafa',
            },
          }}
        />
        <Stack.Screen
          name="detailsTravel"
          component={DetailsTravel}
          options={{
            title: 'Journey Details',
            headerTransparent: 'true',
            headerStyle: {
              backgroundColor: '#b80f0a',
            },
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              color: '#fffafa',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
