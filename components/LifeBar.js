import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styles from '../styles/LifeBarStyles';

export default function LifeBar({ life }) {
  const widthAnim = useRef(new Animated.Value(life)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: life,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [life]);

  return (
    <Animated.View style={[styles.container, { width: widthAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }) }]} />
  );
}
