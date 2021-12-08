import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from '../Button';
import {TextInput} from 'react-native-paper';
import {fontsize, spascing} from '../../assets/styling/size';

const Focus = ({addFocusSubject}) => {
  const [tempItem, setTempItem] = useState(null);
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Would Like You to Focus On? </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.teksInput}
          onSubmitEditing={({nativeEvent}) => setTempItem(nativeEvent.text)}
        />
        <Button title="+" size={50} onPress={() => addFocusSubject(tempItem)} />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  teksInput: {
    marginTop: 10,
    borderWidth: 3,
    marginRight: 10,
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: 'center',
    padding: spascing.md,
    marginTop: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Platform.OS !== 'ios' ? fontsize.xl : fontsize.xxl,
    color: 'black',
  },
  inputContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
