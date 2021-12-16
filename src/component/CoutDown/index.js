import React, {useState} from 'react';
import {StyleSheet, Text, View,Vibration,Platform} from 'react-native';
import {Button, ProgressBar} from 'react-native-paper';
import {color, spascing} from '../../assets/styling/color';
import {KeepAwake} from 'react-native-keep-awake';

import Timer from '../Timer';
import Waktu from '../Waktu';
import Button1 from '../Button';


const CoutDown = ({focusObject,onTimerEnd,clearSubject}) => {

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minuts, setMinuts] = useState(0.1);

  const onProgress = param => {
    setProgress(param);
  };

  const vibrasi = () =>{
    if(Platform === 'ios'){
      const interval = setInterval(()=> Vibration.vibrate(),1000);
      setTimeout(()=> clearInterval(interval),10000);
    }else{
      Vibration.vibrate(10000);
    }
  }

  const onEnd = () => {
    
    setMinuts(20);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
    // vibrasi();
  }

  const changeTime = (minute) =>{
    setMinuts(minute);
    setProgress(1);
    setIsStarted(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Timer minutes={minuts} isPause={!isStarted} onProgress={onProgress} onEnd={onEnd}  />
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
      <Waktu onChangeTime={changeTime}/>
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
      <View>
      <Button
            mode="contained"
            onPress={() => clearSubject()}
            style={{backgroundColor: 'blue',marginTop:10}}>
            Reset
          </Button>
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
