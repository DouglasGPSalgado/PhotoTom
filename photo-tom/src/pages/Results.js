import { React, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  NativeBaseProvider,
  Box,
  Center,
  Pressable
} from "native-base";

export default function Results({ navigation }) {

  return (
    <NativeBaseProvider>
      <ScrollView style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground
          source={require("../../assets/Background.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >

        <Text>Funcinando</Text>

        </ImageBackground>
      </ScrollView>
    </NativeBaseProvider>
  );
}