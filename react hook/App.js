import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HelloWorld from './components/HelloWorld';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HelloWorld nama="fajar" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
