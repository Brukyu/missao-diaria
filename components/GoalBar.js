import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import styles from '../styles/GoalBarStyles';

export default function GoalBar({ level, levelCount }) {
  const widthAnim = useRef(new Animated.Value(0)).current; // Começa com 0 de largura

  useEffect(() => {
    // Se level for zero, a animação não precisa ser executada
    if (level === 0) return;

    const targetLevel = (levelCount * 10) + (level / 10); // Calcula o nível de destino
    const normalizedLevel = (targetLevel / ((levelCount + 1) * 10)) * 100; // Normaliza o nível para a faixa de 0 a 100

    // Define a largura da animação baseada no nível atual
    Animated.timing(widthAnim, {
      toValue: normalizedLevel,
      duration: 500,
      useNativeDriver: false,
    }).start();

    // Reinicia a animação e define a largura como 0 quando o nível é completado
    if (level === (levelCount + 1) * 10) {
      Animated.timing(widthAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  }, [level, levelCount]);

  return (
    <Animated.View style={[styles.container, { width: widthAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }) }]}>
      <Text style={styles.levelText}>{level}/{(levelCount + 1) * 10}</Text>
    </Animated.View>
  );
}
