import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../constants/colors'

const OutlineBtn = ({icon, size, color, children, onPress}) => {
  return <Pressable style={({pressed})=>[styles.btn,pressed && styles.pressed ]} onPress={onPress}>
            <Icon style={styles.icon} name={icon} size={size} color={color} />
            <Text style={styles.text}>{children}</Text>
         </Pressable>
}

const styles= StyleSheet.create({
    pressed:{opacity:.7},
    btn:{
        paddingHorizontal:12, paddingVertical:6,
        margin:4,
        justifyContent:'center', alignItems:'center', flexDirection:'row',
        borderWidth:1, borderColor:Colors.primary500,
    },
    icon:{
        marginRight:6,
    },
    text:{
        color:Colors.primary500
    },
});

export default OutlineBtn