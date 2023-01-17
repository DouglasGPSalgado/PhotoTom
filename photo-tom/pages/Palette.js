import { ScrollView, View, VStack, Center, NativeBaseProvider } from "native-base";
import React from "react";

export function Palette() {
  return (
    <NativeBaseProvider>
    <Center flex={1} px="3">
    <VStack space={4} alignItems="center">
      <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
    </VStack>;
    </Center>
  </NativeBaseProvider>
  )
}
