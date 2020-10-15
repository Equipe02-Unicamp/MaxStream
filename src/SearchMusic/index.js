import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SearchMusic({ returnToMainScreen }) {
  return (
    <View>
      <Text>Buscar música</Text>
      <Button title={'Voltar'} onPress={returnToMainScreen} />
    </View>
  );
}
