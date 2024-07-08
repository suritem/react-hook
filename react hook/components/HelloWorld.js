import React, { useState, useMemo } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { style } from '../assets/style';

export default function HelloWorld(props) {
  const [angka, setAngka] = useState(0);

  const ubahState = (text) => {
    setAngka(Number(text)); 
  };

  const tambahUmur = () => {
    setAngka(angka + 1);
  };

  const displayAge = useMemo(() => `Saat ini usia mu adalah ${angka}`, [angka]);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="isi usia."
        keyboardType="numeric" 
        onChangeText={ubahState}
      />
      <Text style={style.text}>Hello {props.nama}</Text>
      <Text style={style.text}>{displayAge}</Text>
      <Button
        title="+"
        onPress={tambahUmur}
      />
    </View>
  );
}
