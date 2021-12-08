import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from '../../assets/styling/color'

const Button = ({
    style = {},
    teksStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <View>
            <TouchableOpacity style={[styles(size).radius,style]} onPress={props.onPress}>
               <Text style={[styles(size).teks,teksStyle]}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles =(size) => StyleSheet.create({
    radius:{
        borderRadius:size/2,
        width:size,
        height:size,
        borderWidth:2,
        textAlign:'center',
        justifyContent:'center'
        
    },
    teks:{
        color:color.green,
        fontSize:size/3,
        marginLeft:17
    }
})
