import React, { useEffect } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View ,Alert } from 'react-native'
import { useState } from 'react/cjs/react.development'
import Axios from 'axios'


const Item = ({nama,email,bidang,klik,klikDelete}) =>{
return (
<View style={styles.infromasi}>
                <TouchableOpacity onPress={klik} >
                <Image source={{uri:`https://i.pravatar.cc/150?u=${email}`}} style={styles.gambar} />
                </TouchableOpacity>
                <View style={styles.desc}>
                    <Text style={styles.descName}>{nama}</Text>
                    <Text style={styles.descEmail}>{email}</Text>
                    <Text style={styles.descBidang}>{bidang}</Text>
                </View>
                <TouchableOpacity onPress={klikDelete}>
                <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
</View>
)}

const LocalApi = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [bidang,setBidang] = useState('');
    const [users,setUsers] = useState([]);
    const [butoon,setButoon] = useState('Simpan');
    const [idUser,setIdUser] = useState({});

    useEffect(()=>{
     getData();
    },[])
    const submit =() =>{
        const data = {
            name : name,
            email:email,
            bidang:bidang
        }
        if(butoon==='Simpan'){
        Axios.post('http://10.0.2.2:3004/users',data)
        .then(res =>{console.log(`res:${res}`)
                     setName('');
                     setEmail('');
                     setBidang('');
                     getData();})
        }else if(butoon==='Update'){
            Axios.put(`http://10.0.2.2:3004/users/${idUser.id}`,data)
            .then(res =>{
                console.info(`Res update: ${res}`)
                     setName('');
                     setEmail('');
                     setBidang('');
                     getData();
                     setButoon('Simpan')
            })
        }
        
    }
    const getData = () =>{
        Axios.get('http://10.0.2.2:3004/users')
        .then(res =>{
            console.info(`Res Data : ${res}`)
            setUsers(res.data);
        })
    }

    const selectItem = (item) =>{
     setName(item.name);
     setEmail(item.email);
     setBidang(item.bidang);
     setButoon('Update');
     setIdUser(item);
    }

    const deleteItem = (item) => {
        Axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
        .then(res=>{
            console.info('Data Berhasil DiHapus');
            getData();
        })
    }

    return (
        <View style={styles.containner}>
            <Text style={styles.TextTitle}>LOCAL API</Text>
            <TextInput  placeholder='Nama Lengkap' style={styles.TextInput} value={name} onChangeText={(value)=>setName(value)}/>
            <TextInput  placeholder='Email' style={styles.TextInput} value={email} onChangeText={(value)=>setEmail(value)}/>
            <TextInput  placeholder='Bidang' style={styles.TextInput} value={bidang} onChangeText={(value)=>setBidang(value)}/>
            <Button title={butoon} style={styles.buttol} onPress={submit} />
            <Text style={styles.line}></Text>
            {users.map(user=>{
               return <Item 
                           key={user.id}
                           nama={user.name} 
                           email={user.email}
                           bidang={user.bidang} 
                           klik={()=>selectItem(user)}
                           klikDelete={()=>Alert.alert('Peringatan',
                                                       'Apakah Anda yakin?',
                                                       [{
                                                          text:'Tidak',
                                                          onPress :()=>console.log('Tidak jadi Mendelete')
                                                        },
                                                        {
                                                            text:'Ya',
                                                            onPress :()=>deleteItem(user)
                                                        }
                                                       ])} 
                         
                          />
            })}
            
        
            

        </View>
    )
}

export default LocalApi

const styles = StyleSheet.create({
    containner : {
        padding : 20
    },
    TextTitle : {
        textAlign:'center'
    },
    TextInput : {
        borderWidth:1 ,
        marginBottom:5,
        borderRadius:25,
        marginVertical:20,
        padding:10

    },
    buttol:{
        marginTop:10,
        borderRadius:20,

    },
    line: {
        height:2 ,backgroundColor :'black' , marginVertical :20
    },
    gambar:{
        width:80,
        height:80,
        borderRadius:80
    },
    infromasi:{
        flexDirection:'row',
        marginBottom:20

    },
    desc:{
        marginLeft:10,
        flex:1
    },
    descName:{
        fontSize:20,
        fontWeight:'bold'
    },
    descEmail:{
        fontSize:15
    },
    descBidang:{
        fontSize:13
    },
    delete :{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    }


})
