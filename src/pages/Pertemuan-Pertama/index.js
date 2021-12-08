import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Focus from '../../component/Focus';
import CoutDown from '../../component/CoutDown';

const Pertemuan1 = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.wrapper}>
      {focusSubject ? (
        <CoutDown focusObject={focusSubject} />
      ) : (
        <Focus addFocusSubject={setFocusSubject} />
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
