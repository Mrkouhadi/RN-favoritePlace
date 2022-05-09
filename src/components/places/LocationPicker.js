import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../constants/colors'
import OutlineBtn from '../ui/OutlineBtn'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const LocationPicker = () => {
    const locateUserHandler = ()=>{

    }
    const pickOnMapHandler = ()=>{

    }
  return <View>
            <View style={styles.mapPreview}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{...StyleSheet.absoluteFillObject}}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
            </MapView>
            </View>
            <View style={styles.actions}>
                <OutlineBtn onPress={locateUserHandler} color={Colors.primary500} size={25} icon='google-maps'>Locate The User</OutlineBtn>
                <OutlineBtn onPress={pickOnMapHandler} color={Colors.primary500} size={25} icon="map-legend">Pick On Map</OutlineBtn>
            </View>
         </View>
}
const styles = StyleSheet.create({
    mapPreview:{
        marginVertical:8,
        height:300, width:'100%',
        justifyContent:'center', alignItems:'center',
        borderRadius:5,
        backgroundColor:Colors.primary100,
    },
    actions:{
        flexDirection:'row', alignItems:'center', justifyContent:'space-around'
    },
})
export default LocationPicker