import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


export default function SearchSelection() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Olá Felipe, o que você gostaria de fazer
      </Text>
      <View style={styles.chooseBoxContainer}>
        <View style={styles.chooseBox}>
          <Text style={styles.chooseLabel}>
            Ouvir música
          </Text>
        </View>
        <View style={styles.chooseBox}>
          <Text style={styles.chooseLabel}>
            Ver vídeos
          </Text>
        </View>
      </View>
    </View>
  );
}
