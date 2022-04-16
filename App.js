import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AddPlace from './src/screens/AddPlace';
import AllPlaces from './src/screens/AllPlaces';

const Stack = createNativeStackNavigator();

const App  = () => {

  return <>
          <StatusBar style='dark' />
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AllPlaces"  component={AllPlaces}/>
                <Stack.Screen name="AddPlace"  component={AddPlace}/>
            </Stack.Navigator>
          </NavigationContainer>
        </>
};

export default App;
