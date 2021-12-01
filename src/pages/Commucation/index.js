import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cart from '../../component/Cart'
import Product from '../../component/Product'

const Commucation = () => {
    const [angka,setAngka] = useState(0);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.judul}>Belajar Communication</Text>
            <Cart quantity={angka}/>
            <Product counter={()=>setAngka(angka+1)}/>
        </View>
    )
}

export default Commucation

const styles = StyleSheet.create({
    wrapper : {
        padding:20
    },
    judul : {
        textAlign:'center'
    }
})
