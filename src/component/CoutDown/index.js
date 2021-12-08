import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, ProgressBar} from 'react-native-paper';
import {color, spascing} from '../../assets/styling/color';
import Timer from '../Timer';

const CoutDown = ({focusObject}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const onProgress = param => {
    setProgress(param);
  };
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Timer isPause={!isStarted} onProgress={onProgress} />
      </View>
      <View>
        <Text style={styles.title}>Focusing On : </Text>
        <Text style={styles.taks}>{focusObject} </Text>
      </View>
      <ProgressBar
        color="blue"
        progress={progress}
        style={{height: 20, marginBottom: 30, marginTop: 40}}
      />
      <View>
        {isStarted ? (
          <Button
            mode="contained"
            onPress={() => setIsStarted(false)}
            style={{backgroundColor: 'blue'}}>
            Stop
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={() => setIsStarted(true)}
            style={{backgroundColor: 'blue'}}>
            Start
          </Button>
        )}
      </View>
    </View>
  );
};

export default CoutDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 40,
    fontSize: 30,
    color: color.black,
    textAlign: 'center',
  },
  taks: {
    fontSize: 40,
    color: color.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  timer: {
    textAlign: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
});
