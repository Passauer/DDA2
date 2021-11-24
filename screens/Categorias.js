import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Categorias({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
      <Button onPress={() => navigation.navigate('Functions')} title="Functions"/>
      <Button onPress={() => navigation.navigate('Recipes')} title="Recipes"/>
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