import React, { Component, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Counter = () =>{
    const [angka,setAngka] = useState(0);
    return (
     <View style={styles.jarak}>
         <Text style={{borderWidth:5,textAlign:'center',paddingTop:4}}>{angka}</Text>
         <Button title='Tambah' onPress={()=>setAngka(angka+1)} />
     </View>
    )
}

class CounterClass extends Component{
    state = {
        number : 0
    }
    render(){
        return(
            <View>
                <Text style={{borderWidth:5,textAlign:'center',paddingTop:4}}>{this.state.number}</Text>
                <Button title='Tambah' onPress={() => this.setState({number:this.state.number + 1})} />
            </View>
        )
    }
}


const DinamisState = () => {
    return (
        <View style={styles.warp}>
            <Text style={styles.judul}>State Dinamis</Text>
            <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>Counter Dengan Function</Text>
            <Counter/>
            <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>Counter Dengan Class</Text>
            <CounterClass/>
        </View>
    )
}

export default DinamisState

const styles = StyleSheet.create({
    warp : {
        padding:20
    },
    judul : {
        textAlign:'center'
    },
    jarak : {
        marginTop:10
    }
})

