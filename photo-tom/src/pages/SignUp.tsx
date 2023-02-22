import React from "react";
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  Center,
  Image,
} from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/core";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}

export function SignUp() {

    const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor={"#C9F2FF"}>
        <Image  source={require("../../assets/icon.png")} alt="Icon" alignSelf={"center"} marginTop={65} />
        <Center
          flex={1}
          bgColor={"white"}
          my={30}
          mx={5}
          px={8}
          borderRadius={25}
        >
          <Heading marginBottom={10} color={"#003E52"} fontSize={48}>
            Login
          </Heading>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Entrar" onPress={() => navigation.navigate("Home")}/>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}
