import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'


const Story = (props) => {
    return (
        <View>
          <Image source = {{uri:props.gambar}} style={styles.gambar} />
          <Text style={styles.tulisan}>{props.judul}</Text>
        </View>
    )
}


export default function ComponentDinamis() {
    return (
        <View>
            <Text>Latihan Insta Story</Text>
            <View style={styles.pembungkus}>
            <ScrollView horizontal>
            <Story judul ='Pemandangan' gambar='https://placeimg.com/100/100/arch'/>
            <Story judul ='Hewan' gambar='https://placeimg.com/100/100/animals'/>
            <Story judul ='Belajar' gambar='https://placeimg.com/100/100/tech'/>
            <Story judul ='Kegabutan' gambar='https://placeimg.com/100/100/nature/sepia'/>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gambar:{
        width:50,
        height:50,
        marginTop:10,
        borderRadius:50,
        marginRight:20,
        borderWidth:50
    },
    tulisan :{
        maxWidth:50
    },
    pembungkus:{
        flexDirection:'row'
    }
})
