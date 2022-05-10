import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/colors';
import Button from '../ui/Button';
import ImgPicker from './ImagePicker';
import LocationPicker from './LocationPicker';

const PlaceForm = () => {
  const [title, setTitle] = useState('');
  const [pickedmage, setPickedImage] = useState();

  const changeTitleHandler = (enteredTitle)=>{
    setTitle(enteredTitle)
  };
  const pickedImageHandler = (imgUri) =>{
    setPickedImage(imgUri);
  }
  return <ScrollView style={styles.form}>
          <View style={{marginBottom:100}}> 
              <Text style={styles.label}>Title :</Text>
              <TextInput style={styles.input} placeholder="Type a title for your place"
                         onChangeText={changeTitleHandler} 
                         value={title}
              />
            <Text style={styles.label}>Image :</Text>
            <ImgPicker onTakeImage={pickedImageHandler}/>
            <Text style={styles.label}>Location :</Text>
            <LocationPicker/>
            <Button>Submit</Button>
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