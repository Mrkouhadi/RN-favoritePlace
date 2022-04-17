import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AddPlace from './src/screens/AddPlace';
import AllPlaces from './src/screens/AllPlaces';
import IconBtn from './src/components/ui/IconBtn';
import {Colors} from './src/constants/colors';

const Stack = createNativeStackNavigator();

const App  = () => {

  return <>
          <StatusBar style='dark' />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle:{ backgroundColor:Colors.primary500,},
                headerTintColor:Colors.gray700,
                contentStyle:{backgroundColor:Colors.gray700},
              }}
            >
                <Stack.Screen name="AllPlaces"  component={AllPlaces} 
                  options={({navigation})=>({
                    title:'Your Favorite Places',
                    headerRight:({tintColor})=><IconBtn icon="plus-circle-outline"
                                                        size={25} color={tintColor}
                                                        onPress={()=>navigation.navigate("AddPlace")}
                                               />
                })}/>
                <Stack.Screen name="AddPlace" component={AddPlace}
                              options={{
                                title:'Add a New Place',
                                // presentation:'modal' // default:card,modal, formSheet, containedModal,containedTransparentModal,transparentModal,fullScreenModal
                              }}
                />
            </Stack.Navigator>
          </NavigationContainer>
        </>
};

export default App;
