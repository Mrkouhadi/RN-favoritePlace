import React from 'react'
import { View, Button} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
const ImgPicker = () => {

    const takePhotoHandler = () =>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }
    const selectPhotoHandler = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
    return <View>
              <Button onPress={takePhotoHandler} title="Take a Photo" color="pink"/>
              <Button onPress={selectPhotoHandler} title="Select From Gallery" color="pink"/>
           </View>
}
export default ImgPicker