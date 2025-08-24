import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ალასი</Text>
      <Button title="თამაშის დაწყება" onPress={() => navigation.navigate('Game')} />
      <Button title="წესები" onPress={() => alert('თამაშის წესები მალე გამოჩნდება')} />
      <Button title="სეტინგები" onPress={() => alert('სეტინგები მალე გამოჩნდება')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:30, marginBottom:20 }
});
