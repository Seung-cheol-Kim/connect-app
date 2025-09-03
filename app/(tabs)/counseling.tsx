import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CounselingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>상담 화면</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
