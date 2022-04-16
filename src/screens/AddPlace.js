import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'
import PlaceForm from '../components/places/PlaceForm'

const AddPlace = ({navigation}) => {
  return (
    <>
    <Button title="go back" color='red' onPress={()=> navigation.navigate('AllPlaces')}/>
    <PlaceForm />
    </>
  )
}

export default AddPlace