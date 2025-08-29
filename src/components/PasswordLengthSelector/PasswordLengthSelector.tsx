// src/components/PasswordLengthSelector/PasswordLengthSelector.tsx

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './PasswordLengthSelectorStyles';

interface PasswordLengthSelectorProps {
  length: number;
  onChange: (newLength: number) => void;
}

export function PasswordLengthSelector({ length, onChange }: PasswordLengthSelectorProps) {
  const increment = () => { if (length < 20) onChange(length + 1); }
  const decrement = () => { if (length > 8) onChange(length - 1); }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tamanho da senha</Text>
      <View style={styles.stepperContainer}>
        <Pressable onPress={decrement} style={styles.stepperButton}>
          <Text style={styles.stepperButtonText}>-</Text>
        </Pressable>

        <Text style={styles.lengthDisplay}>{length}</Text>

        <Pressable onPress={increment} style={styles.stepperButton}>
          <Text style={styles.stepperButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
