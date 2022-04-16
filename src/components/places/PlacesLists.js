import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/colors'
import PlaceItem from './PlaceItem'

const PlacesLists = ({places=[]}) => {
  if(!places || places.length === 0) return <View style={styles.container}>
                                              <Text style={styles.fallBackText}>No places Added Yet !</Text>
                                            </View>
  const renderHandler = (data) =>{
    return <PlaceItem place={data.item} onSelect={()=>{}}/>
  }
  return <FlatList data={places} keyExtractor={item => item.id} renderItem={renderHandler} />
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center', alignItems:'center',
  },
  fallBackText:{
    fontSize:16,
    color:Colors.primary100,  }
})
export default PlacesLists