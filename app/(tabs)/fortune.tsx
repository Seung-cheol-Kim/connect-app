import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FortuneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>운세 화면</Text>
      <Text style={styles.subtext}>오늘의 연애 타로, 재회운 등을 볼 수 있는 기능이 여기에 만들어질 거예요.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  }
});
