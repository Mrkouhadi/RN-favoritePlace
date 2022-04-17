import React, { useState } from 'react'
import { View, Button, Image, StyleSheet} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

const ImgPicker = () => {
    const [img, setImg] = useState();

    const takePhotoHandler = () =>{
        ImagePicker.openCamera({
            // width: 300,
            // height: 400,
            compressImageMaxHeight:300,
            compressImageMaxWidth:300,
            cropping: true,
            compressImageQuality:.7,
          }).then(image => {
            setImg(image.path);
          });
    }
    const selectPhotoHandler = () =>{
        ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            compressImageMaxHeight:300,
            compressImageMaxWidth:300,
            cropping: true
          }).then(image => {
            setImg(image.path);
          });
    }
    return <View style={styles.container}>
              <Button style={styles.btn} onPress={takePhotoHandler} title="Take a Photo" color="pink"/>
              <Button style={styles.btn} onPress={selectPhotoHandler} title="Select From Gallery" color="pink"/>
              <Image style={styles.img}
                     source={{uri:img}}
              />
           </View>
}
const styles= StyleSheet.create({
    container:{
        height:500,
        justifyContent:'space-around', alignItems:'center'
    },
    btn:{
        borderRadius:5,
    },
    img:{
        marginVertical:20,
        width:300, height:300,
        borderRadius:150
    }
})
export default ImgPicker