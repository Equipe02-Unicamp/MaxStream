import React, { useState, useMemo } from 'react';
import { View, Image } from 'react-native';
import Home from '../Home';
import SearchMusic from '../SearchMusic';
import SearchVideo from '../SearchVideo';
import NavigationBar from '../NavigationBar';
import styles from './styles';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home')

  const handleSearchSelection = (selection) => {
    setCurrentScreen(selection)
  }

  const returnToMainScreen = () => {
    setCurrentScreen('Home')
  }

  const availableScreens = useMemo(() => ({
    Home: <Home onSearchSelection={handleSearchSelection} />,
    SearchMusic: <SearchMusic returnToMainScreen={returnToMainScreen} />,
    SearchVideo: <SearchVideo returnToMainScreen={returnToMainScreen} />
  }), [])

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image style={styles.compactLogo} source={require('./compact_logo.png')} />
      </View>
      <View style={styles.mainArea}>
        {availableScreens[currentScreen]}
      </View>
      <NavigationBar />
    </View>
  );
}
