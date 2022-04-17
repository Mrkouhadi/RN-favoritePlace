import React from 'react'
import { View, Button} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = () => {

    const openCam = ()=>{
        const options = {
            mediaType:'photo',
            quality:1,
        }
        launchCamera(options, res=>{
            if(res.didCancel){
                console.log('User cancelled using Camera');
            }else if(res.errorCode){
                console.log(res.errorCode);
            }else{
                const data = res.assets;
                console.log(data);
            }
        })
    }
    return <View>
                <Button onPress={openCam} title="open Camera" color="pink"/>
           </View>
}

export default ImagePicker