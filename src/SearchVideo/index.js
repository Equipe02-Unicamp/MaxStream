import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SearchVideo({ returnToMainScreen }) {
  return (
    <View>
      <Text>Buscar vídeo</Text>
      <Button title={'Voltar'} onPress={returnToMainScreen} />
    </View>
  );
}
