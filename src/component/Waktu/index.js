import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Button'

const Waktu = ({onChangeTime}) => {
    return (
        <View style={styles.container}>
            <View style={styles.desc}>
            <Button size={75} title='10' onPress={()=>onChangeTime(10)} />
            </View>
            <View style={styles.desc}>
            <Button size={75} title='20' onPress={()=>onChangeTime(20)} />
            </View>
            <View style={styles.desc}>
            <Button size={75} title='25' onPress={()=>onChangeTime(25)} />
            </View>
        </View>
    )
}

export default Waktu

const styles = StyleSheet.create({
    container :{
        textAlign:'center',
        alignItems:'center',
        marginBottom:40,
        flexDirection:'row',
        paddingLeft:35
        

        
    },
    desc:{
        flex:1
    }
    
})
