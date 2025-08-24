import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import words from '../words.json';

export default function GameScreen({ navigation }) {
  const [currentWord, setCurrentWord] = useState('');

  const nextWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
  };

  useEffect(() => {
    nextWord();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{currentWord}</Text>
      <Button title="შემდეგი სიტყვა" onPress={nextWord} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  word: { fontSize:40, marginBottom:20 }
});
