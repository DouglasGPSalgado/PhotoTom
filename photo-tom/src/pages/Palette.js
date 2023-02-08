import {
  VStack,
  Center,
  NativeBaseProvider,
  HStack,
  FlatList,
  Image,
} from "native-base";
import React, { useState, useContext } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import GradientText from "../components/GradientText";
import { ImageContext } from "../contexts/img";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Palette() {
  const { img } = useContext(ImageContext);
  const navigation = useNavigation();
  const [data, setData] = useState([
    { color: "#D3BCA0", id: 1 },
    { color: "#C7B297", id: 2 },
    { color: "#C2A281", id: 3 },
    { color: "#BBA78E", id: 4 },
    { color: "#B8997A", id: 5 },
    { color: "#AF8D70", id: 6 },
    { color: "#AD9073", id: 7 },
    { color: "#A68569", id: 8 },
    { color: "#9C7E63", id: 9 },
    { color: "#986B4A", id: 10 },
    { color: "#906546", id: 11 },
    { color: "#875F42", id: 12 },
    { color: "#845329", id: 13 },
    { color: "#7D4E27", id: 14 },
    { color: "#764A25", id: 15 },
    { color: "#46312B", id: 16 },
    { color: "#3D2824", id: 17 },
    { color: "#341F1C", id: 18 },
  ]);

  const onClickItem = (item, index) => {
    const newArrData = data.map((e, index) => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: true,
        };
      }
      return {
        ...e,
        selected: false,
      };
    });
    setData(newArrData);
  };
  const getItemLayout = (item, index) => {
    return { length: 79, offset: 79 * index, index };
  };

  const { height } = Dimensions.get("window");

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../../assets/Background.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <GradientText
          style={{ fontSize: 32, alignSelf: "center" }}
          text={"Paleta de Cores"}
        />
        <GradientText
          style={{
            fontSize: 12,
            alignSelf: "center",
            paddingHorizontal: 65,
            textAlign: "center",
          }}
          text={
            "Selecione a tonalidade mais aproximada da tonalidade de pele do cliente"
          }
        />
        <Center flex={1} px="3">
          <VStack space={4} alignItems="center">
            <Center
              w={346}
              h={400}
              bg="white"
              rounded="md"
              shadow={-1}
              borderRadius={25}
            >
              <HStack space={3} justifyContent="center">
                <Center
                  w={346}
                  h={400}
                  bg="white"
                  rounded="md"
                  shadow={3}
                  borderRadius={25}
                  alignItems={"baseline"}
                >
                  <HStack space={3} justifyContent="center">
                    <FlatList
                      h={400}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={(item) => item.id}
                      data={data}
                      snapToAlignment={"center"}
                      decelerationRate={"fast"}
                      snapToOffsets={[...Array()].map(
                        (x, i) => i * (height - 60)
                      )}
                      renderItem={({ item, index }) => (
                        <TouchableOpacity
                          onPress={() => onClickItem(item, index)}
                          style={{
                            backgroundColor: item.color,
                            width: 75,
                            height: 75,
                            borderRadius: 100,
                            marginVertical: 4,
                            marginHorizontal: 10,
                            borderWidth: item.selected ? 3 : 0,
                            borderColor: item.selected ? "#003E52" : "white",
                          }}
                        ></TouchableOpacity>
                      )}
                      getItemLayout={getItemLayout}
                    />
                    <VStack justifyContent={"center"}>
                      <AntDesign name="caretleft" size={30} color="#003E52" />
                    </VStack>

                    <VStack space={3} justifyContent={"center"}>
                      <Image
                        w={180}
                        h={180}
                        borderRadius={15}
                        marginRight={5}
                        source={{ uri: img.image }}
                        alt={"Image"}
                      ></Image>
                    </VStack>
                  </HStack>
                </Center>
              </HStack>
            </Center>
            <TouchableOpacity onPress={() => navigation.navigate("Form")}>
              <Text style={{ fontSize: 32, color: "#00B707" }}>Continuar</Text>
            </TouchableOpacity>
          </VStack>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
