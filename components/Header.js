import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkblue',
    height: 60,
    padding: 15,
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
