import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {fontsize, spascing} from '../../assets/styling/size';
import {color} from '../../assets/styling/color';

const minusToMili = min => min * 1000 * 60;

const formatWaktu = min => (min < 10 ? `0${min}` : min);

const Timer = ({minutes = 20, isPause, onProgress,onEnd}) => {
  const interval = useRef(null);
  const hitungMundur = () => {
    setMilis(time => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLift = time - 1000;
      onProgress(timeLift / minusToMili(minutes));
      return timeLift;
    });
  };
  
  useEffect(()=>{
    setMilis(minusToMili(minutes))
  },[minutes])

  useEffect(() => {
    if (isPause) {
      return;
    } else {
      interval.current = setInterval(hitungMundur, 1000);
    }
    return () => clearInterval(interval.current);
  }, [isPause]);
  const [milis, setMilis] = useState(null);

  const menit = Math.floor(milis / 1000 / 60) % 60;
  const detik = Math.floor(milis / 1000) % 60;
  return (
    <View>
      <Text style={styles.task}>
        {formatWaktu(menit)}:{formatWaktu(detik)}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  task: {
    fontSize: fontsize.xxxl,
    color: color.black,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    padding: spascing.lg,
    marginBottom: 10,
  },
});
