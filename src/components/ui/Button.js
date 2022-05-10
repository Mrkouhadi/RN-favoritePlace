import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'

const Button = ({onPress, children}) => {
  return (
    <Pressable style={({pressed})=> [styles.button,pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    button:{
        paddingVertical:8, paddingHorizontal:12,
        margin:4,
        backgroundColor:Colors.primary800,
        elevation:8,
        shadowColor:'black', shadowOffset:{width:1,height:1,}, shadowOpacity:.15,shadowRadius:2,
        borderRadius:4,
    },
    pressed:{
        opacity:.7,
    },
    text:{
        fontSize:16, textAlign:'center'
        color:Colors.primary800
    }
})
export default Button