import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AddPlace from './src/screens/AddPlace';
import AllPlaces from './src/screens/AllPlaces';
import IconBtn from './src/components/ui/IconBtn';


const Stack = createNativeStackNavigator();

const App  = () => {

  return <>
          <StatusBar style='dark' />
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AllPlaces"  component={AllPlaces} options={{
                  headerRight:({tintColor})=><IconBtn icon="plus-circle-outline" size={25} color={tintColor} />
                }}/>
                <Stack.Screen name="AddPlace"  component={AddPlace}/>
            </Stack.Navigator>
          </NavigationContainer>
        </>
};

export default App;
