import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WebViewComponent } from './components/WebViewComponent';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebViewComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
