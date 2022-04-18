import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../constants/colors'
import OutlineBtn from '../ui/OutlineBtn'

const LocationPicker = () => {
    const locateUserHandler = ()=>{

    }
    const pickOnMapHandler = ()=>{

    }
  return <View>
            <View style={styles.mapPreview}>

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