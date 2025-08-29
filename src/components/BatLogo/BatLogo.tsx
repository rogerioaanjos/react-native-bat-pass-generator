// src/components/BatLogo/BatLogo.tsx

import React, { useState, useRef } from 'react';
import { View, Text, Image, Pressable, Animated, Alert } from 'react-native';
import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png';

interface BatLogoProps {
  onPress?: () => void;
}

export function BatLogo({ onPress }: BatLogoProps) {
  const [pressCount, setPressCount] = useState(0);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const colorAnim = useRef(new Animated.Value(0)).current; // para o vermelho

  const handlePress = () => {
    // Pulsar imagem
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.1, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();

    setPressCount(prev => prev + 1);

    if (pressCount + 1 >= 5) {
      setPressCount(0);

      // animação do fundo vermelho
      Animated.sequence([
        Animated.timing(colorAnim, { toValue: 1, duration: 100, useNativeDriver: false }),
        Animated.timing(colorAnim, { toValue: 0, duration: 100, useNativeDriver: false }),
        Animated.timing(colorAnim, { toValue: 1, duration: 100, useNativeDriver: false }),
        Animated.timing(colorAnim, { toValue: 0, duration: 100, useNativeDriver: false }),
      ]).start();

      if (onPress) onPress();
    }
  };

  // Interpolação da cor de fundo: normal -> vermelho
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#4D4D4D', 'red'],
  });

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={{ backgroundColor, alignItems: 'center', paddingVertical: 20 }}>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Animated.Image
          source={batLogo}
          style={{ resizeMode: 'contain', height: 180, transform: [{ scale: scaleAnim }] }}
        />
      </Animated.View>
    </Pressable>
  );
}
