// src/screens/Home/Home.tsx

import React, { useState, useRef, useEffect } from "react";
import { View, Animated, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';

import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from '../../components/BatButton/BatButton';
import { PasswordLengthSelector } from '../../components/PasswordLengthSelector/PasswordLengthSelector';
import generatePass from '../../services/passwordService';

export default function Home() {
  const [length, setLength] = useState<number>(8);
  const [password, setPassword] = useState<string>('');
  const [cheatActive, setCheatActive] = useState<boolean>(false);

  const fadeAnim = useRef(new Animated.Value(0)).current; // fade-in animation

  const handleGenerate = () => {
    const newPassword = generatePass(length);
    setPassword(newPassword);
  };

  const handleCheatCode = () => {
    Alert.alert(
      "🎉 Secret Password Mode Activated!",
      "Você desbloqueou o modo secreto!", 
      [
        {
          text: "OK",
          onPress: () => setCheatActive(true)
        }
      ]
    );
  };

  useEffect(() => {
    if (cheatActive) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [cheatActive]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo onPress={handleCheatCode} />
      </View>

      <View style={styles.inputContainer}>
        {cheatActive && (
          <Animated.View style={{ opacity: fadeAnim, width: '100%' }}>
            <PasswordLengthSelector length={length} onChange={setLength} />
          </Animated.View>
        )}

        <BatButton password={password} onGenerate={handleGenerate} />
      </View>

      <StatusBar style="light" />
    </View>
  );
}
