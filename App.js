import { StyleSheet, Text, View } from 'react-native';

import Navegador from './navigation/Navegador';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Navegador/>
      <StatusBar style="auto" />
    </>
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
