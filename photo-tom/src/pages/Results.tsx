import { Text, VStack } from 'native-base';
import { useState } from 'react';
import { ImageBackground, ScrollView } from 'react-native';

export default function Results() {

  return (
      <ImageBackground
        source={require("../../assets/Background.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Text color='blue.100'>
          ...
        </Text>
      </ImageBackground>
  
  );
}