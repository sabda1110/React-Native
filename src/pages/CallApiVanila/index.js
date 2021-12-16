import React, { useState }  from 'react'
import { StyleSheet, Text, View,Button, Image } from 'react-native'
import { useEffect } from 'react'

const CallApiVanila = () => {
    const [dapatData,setDapatData] = useState({
     avatar :'',
     email : '',
     first_name : '',

     last_name:''
    });

    const [getJob,setGetJob] = useState({
        name :'',
        job :''
    })
    useEffect(()=>{
        //Methode Get
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(json => console.log(json))

        //Method POST
        // const dataForApi = {
        //     "name": "morpheus",
        //     "job": "leader"
        // }
        // fetch('https://reqres.in/api/users',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type' : 'application/JSON'
        //     },
        //     body:JSON.stringify(dataForApi)
        // })
        // .then(response => response.json())
        // .then(json =>{
        //     console.info(`Post Respound `,json)})
    },[]);
    const getData = () => {
         //Methode Get
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {console.log(json)
                       setDapatData(json.data)})
    }
    const postData = () =>{
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
            console.info(`Post Respound `,json)
            setGetJob(json)})
    }
    return (
        <View style={styles.containner}>
            <Text style={styles.TextTitle}>Manggil API</Text>
            <Button title='Get Data' onPress={getData} />
            <Text>Respound Get Data</Text>
            <Image source={{uri:dapatData.avatar}} style={styles.image}/>
            <Text>{dapatData.email}</Text>
            <Text>{`${dapatData.first_name}  ${dapatData.last_name}`}</Text>
            <Text style={styles.line}></Text>
            <Button title='Get Data' onPress={postData} />
            <Text>{getJob.name}</Text>
            <Text>{getJob.job}</Text>
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
    },
    line: {
        height:2 ,backgroundColor :'black' , marginVertical :20
    },
    image:{
        width:100,
        height:100,
    }
})
