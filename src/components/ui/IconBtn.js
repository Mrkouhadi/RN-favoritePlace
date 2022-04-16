import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const IconBtn = ({icon, size, color, onPress }) => {

  
  return <Pressable style={({pressed})=>[styles.button, pressed && styles.pressed]}
                    onPress={onPress}
         >
            <Icon name={icon} color={color} size={size}/>
         </Pressable>
}

const styles = StyleSheet.create({
    button:{
        padding:8,
        margin:4,
        justifyContent:'center', alignItems:'center'
    },
    pressed:{
        opacity:.6,
    },
});

export default IconBtn