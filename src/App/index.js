import React from 'react';
import { View, Image } from 'react-native';
import SearchSelection from '../SearchSelection'
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image style={styles.compactLogo} source={require('./compact_logo.png')} />
      </View>
      <View style={styles.mainArea}>
        <SearchSelection />
      </View>
      <View style={styles.footerArea} />
    </View>
  );
}
