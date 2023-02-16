import React from "react";
import { NativeBaseProvider, Box, Pressable, Text } from "native-base";
import { TouchableOpacity } from "react-native";
function NavigationButton(props) {
  return (
    <NativeBaseProvider>
      <TouchableOpacity onPress={props.onPress} margin="4" padding="4">
        <Text
          margin="4"
          textAlign="center"
          fontSize="28"
          fontWeight="medium"
          color="#19C8FF"
        >
          {props.titulo}
        </Text>
      </TouchableOpacity>
    </NativeBaseProvider>
  );
}
export default NavigationButton;