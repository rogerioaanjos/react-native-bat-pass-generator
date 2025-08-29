// src/components/BatButton/BatButtonStyles.tsx

import React from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';

interface BatButtonProps {
  password: string;
  onGenerate: () => void;
}

export function BatButton({ password, onGenerate }: BatButtonProps) {
  const handleCopyButton = () => {
    if (password !== '') {
      Clipboard.setStringAsync(password);
      alert('Senha copiada!');
    }
  };

  return (
    <>
      <BatTextInput pass={password} />

      <Pressable onPress={onGenerate} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
