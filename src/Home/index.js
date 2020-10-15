import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function Home({ onSearchSelection }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Olá João, o que você gostaria de fazer
      </Text>
      <View style={styles.chooseBoxContainer}>
        <Button title='Ouvir música' onPress={() => onSearchSelection('SearchMusic')} />
        <Button title='Buscar Vídeo' onPress={() => onSearchSelection('SearchVideo')} />
      </View>
    </View>
  );
}
