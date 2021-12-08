import React  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'

const CallApiVanila = () => {
    useEffect(()=>{
        //Methode Get
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(json => console.log(json))

        //Method POST
        const dataForApi = {
            "name": "morpheus",
            "job": "leader"
        }
        fetch('https://reqres.in/api/users',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/JSON'
            },
            body:JSON.stringify(dataForApi)
        })
        .then(response => response.json())
        .then(json =>{
            console.info(`Post Respound `,json)})
    },[]);
    return (
        <View style={styles.containner}>
            <Text style={styles.TextTitle}>Manggil API</Text>
        </View>
    )
}

export default CallApiVanila

const styles = StyleSheet.create({
    containner : {
        padding : 20
    },
    TextTitle : {
        textAlign:'center'
    }
})
