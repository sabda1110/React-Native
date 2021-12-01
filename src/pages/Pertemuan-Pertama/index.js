import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Focus from '../../component/Focus';

const Pertemuan1 = () => {
    const [focusSubject,setFocusSubject] = useState(null);
    return (
        <View style={styles.wrapper}>
             {focusSubject ? 
          (
           <Text>Fokus Anda andalah :</Text>
          ):
         (
          <Focus addFocusSubject={setFocusSubject}/>   
         )} 
         <Text>{focusSubject}</Text>

        </View>
    )
}

export default Pertemuan1

const styles = StyleSheet.create({
    wrapper :{
        padding : 20
    }
})
