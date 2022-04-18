import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, useWindowDimensions} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import OutlineBtn from '../ui/OutlineBtn';
import { Colors } from '../../constants/colors'

const ImgPicker = () => {
    const [img, setImg] = useState();
    
    const takePhotoHandler = () =>{
        ImagePicker.openCamera({
            // width: 300,
            // height: 400,
            compressImageMaxHeight:300,
            compressImageMaxWidth:400,
            cropping: true,
            compressImageQuality:.7,
          }).then(image => {
            setImg(image.path);
          });
    }
    const selectPhotoHandler = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            // compressImageMaxHeight:300,
            // compressImageMaxWidth:400,
            cropping: true,
            // multiple:true,
            // compressImageQuality:.7,

          }).then(image => {
            setImg(image.path);
          });
    }
    return <View style={styles.container}>
              <View style={styles.imgBox}>
                { !!img ?    <Image style={styles.img}
                                  source={{uri:img}}
                            />
                        : <Text style={styles.imgFallbackText}>No image taken yet !</Text>
                }
              </View>
                <View style={styles.btns}>
                    <OutlineBtn onPress={takePhotoHandler} icon="camera" size={20} color={Colors.primary500} >
                        Take an Picture
                    </OutlineBtn>
                    <OutlineBtn onPress={selectPhotoHandler} icon="album" size={20} color={Colors.primary500} >
                        Select an Image
                    </OutlineBtn>
                </View>
           </View>
}
const styles= StyleSheet.create({
    container:{
        height:300, width:'100%',
        justifyContent:'space-between', alignItems:'center',
        overflow:'hidden',
    },
    imgBox:{
        width:"100%", flex:.95,
        borderRadius:10,
        justifyContent:'center', alignItems:'center',
        overflow:'hidden',
    },
    btn:{
        borderRadius:10,
    },
    btns:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    },
    img:{
        width:'100%', height:"100%",         borderRadius:10,

    },
    imgFallbackText:{
        fontSize:20, color:'white', 
        letterSpacing:2, fontWeight:'bold'
    }
})
export default ImgPicker