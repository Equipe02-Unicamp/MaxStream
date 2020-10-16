import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function SearchMusic({ returnToMainScreen }) {

  const [focused, setFocused] = useState(true);

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  return (
    <>
      <TextInput
        placeholder="Nome da música"
        selectionColor="#C7f9"
        underlineColorAndroid={
          focused ? "#C7f9" : "#D3D3D3"
        }
        onFocus={handleFocus}
      />
      <View>
        <Button title={'Voltar'} onPress={returnToMainScreen} />
      </View>
    </>
  )
}