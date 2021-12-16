import React from 'react'
import { StyleSheet, Text, View ,FlatList, SafeAreaView ,  } from 'react-native'
import { Button } from 'react-native-paper'

import { fontsize } from '../../assets/styling/size'

const HistoryItem =({item, index}) => {
    return <Text style={styles.historyItem(item.status)}>{JSON.stringify(item.subject)}</Text>
}


const FocusHistory = ({focusHistory,onClear}) => {
    
    return (
        <>
         <SafeAreaView style={{flex:1}} >
             
           {!!focusHistory.length && (
             <View>  
              <Text style={styles.title}>History Pembelajaran</Text> 
              <FlatList style={{flex:1}}
               contentContainerStyle={{flex:1 , alignItems:'center'}}
               data={focusHistory}
               renderItem={HistoryItem}
               />
             </View>
           )}
         </SafeAreaView>
         <View>
         <Button
            mode="contained"
            onPress={() => onClear()}
            style={{backgroundColor: 'blue',marginTop:40}}>
            Reset
         </Button>
         </View>
        </>
    )
}

export default FocusHistory

const styles = StyleSheet.create({
    historyItem : (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontsize:fontsize.lg
    }),
    title : {
        color: 'black',
        fontsize : fontsize.xxl
        
    }
})
