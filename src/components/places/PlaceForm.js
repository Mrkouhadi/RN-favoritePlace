import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/colors';
import ImgPicker from './ImagePicker';

const PlaceForm = () => {
  const [title, setTitle] = useState('');

  const changeTitleHandler = (enteredTitle)=>{
    setTitle(enteredTitle)
  };

  return <ScrollView style={styles.form}>
            <View>
              <Text style={styles.label}>Title :</Text>
              <TextInput style={styles.input} placeholder="Type a title for your place"
                         onChangeText={changeTitleHandler} 
                         value={title}
              />
            <Text style={styles.label}>Image :</Text>
            <ImgPicker/>
            </View>
         </ScrollView>
}
const styles = StyleSheet.create({
  form:{
    flex:1,
    padding:24,
  },
  label:{
    fontWeight:'bold',
    marginVertical:4,
    color:Colors.primary500,
  },
  input:{
    marginVertical:8, paddingHorizontal:4, paddingVertical:8,
    fontSize:16,
    borderBottomColor:Colors.primary700,
    backgroundColor:Colors.primary100,
    borderRadius:5,
  },
})
export default PlaceForm