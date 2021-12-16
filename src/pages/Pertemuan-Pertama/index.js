import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Focus from '../../component/Focus';
import CoutDown from '../../component/CoutDown';
import FocusHistory from '../../component/Focus/FocusHistory';

const STATUS = {
  COMPLATED : 1,
  CANCLED : 2
}
const Pertemuan1 = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory,setFocusHistory] = useState([]);

  const addFocusHistory  = (subject,status) =>{
    setFocusHistory([...focusHistory,{subject,status}])
  }

  const onClear = () => {
    setFocusHistory([]);
  }

  console.log(focusHistory);
  return (
    <View style={styles.wrapper}>
      {focusSubject ? (
        <CoutDown focusObject={focusSubject} 
                  onTimerEnd={()=>{
                    addFocusHistory(focusSubject,STATUS.COMPLATED)
                    setFocusSubject(null)}
                              } 
                  clearSubject={()=>{
                    setFocusSubject(null)
                    addFocusHistory(focusSubject,STATUS.CANCLED)}
                               }/>
      ) : (
        <View>
        <Focus addFocusSubject={setFocusSubject} />
        <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </View>
      )}
    </View>
  );
};

export default Pertemuan1;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
