import { React, useState } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  NativeBaseProvider,
  Box,
  Center,
  Pressable,
  Button,
  Text,
  Modal,
  VStack,
  HStack
} from "native-base";
import InputSpinner from "react-native-input-spinner";

import Card from "../components/Card";
import GradientText from "../components/GradientText";

export default function Home({ navigation }) {

  //Const Modal
  const [showModal, setShowModal] = useState(false);
  const [fototipo, setFototipo] = useState(1);

  //testes
  console.log(fototipo)

  return (
    <NativeBaseProvider>
      <ScrollView style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground
          source={require("../../assets/Background.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >

          {/* Botão de teste */}
          <Pressable
            onPress={() => navigation.navigate("Form")}
          >
            <Text>Teste</Text>
          </Pressable>
          {/* Fim da area do botão de teste */}

          <Box
            //Viel trocada por Box na Native Base
            alignItems="center"
          >
            <Image
              source={require("../../assets/image_home.png")}
              style={{ height: 200, width: 200, alignSelf: "center" }}
              resizeMode="contain"
            />
            <GradientText
              style={styles.title}
              text={"Escolha o tipo de análise"}
            />
            <GradientText
              style={styles.info}
              text={"Caso tenha duvidas clique no botão “?” para mais detalhes"}
            />
          </Box>
          <Box
            px="5%" //px = paddingVertical
          >
            <Card
              titulo={"Paleta de Cores"}
              subTitulo={"Comparação visual do técnico"}
              descricao={
                "Análise simples onde o técnico tira uma foto do cliente e compara visualmente com uma paleta de cores + Formulário para análise minuciosa"
              }
              acaoPrimaria={"Continuar"}
              onPress={() => {
                setShowModal(true);
              }}
            />

            {/* <Card
              titulo={"Reconhecimento de Imagem"}
              subTitulo={"Visão computacional"}
              descricao={
                "Reconhecimento de fototipo visual automática a partir de foto do local do procedimento + Formulário para análise minuciosa"
              }
              acaoPrimaria={"Continuar"}
            /> */}

            <Center>
              <Modal
                //Modal chamado pelo <Card /> para definir o fototipo.
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size="lg"
                shadow="7"
              >
                <Modal.Content width="85%">
                  <Modal.CloseButton />
                  <Modal.Header                  >
                    <Text
                      fontSize="20"
                      fontWeight="normal"
                      color="#003E52"
                    >
                      Fototipo
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <Center>
                        <Text
                          marginBottom="2"
                          textAlign="center"
                          fontSize="22"
                          fontWeight="bold"
                          color="#003E52"
                        >
                          Antes de começar, indique o fototipo que você identifica
                          na pessoa analisada.
                        </Text>
                        <Text
                          marginBottom="2"
                          textAlign="center"
                          fontSize="14"
                          fontWeight="medium"
                          color="#003E52"
                        >
                          Utilizamos esses dados para melhorar
                          nosso método de análise.
                        </Text>
                        <Box
                          py="8"
                        >
                          <InputSpinner
                            //estilo
                            width={"80%"}
                            fontSize={28}
                            textColor={"#003E52"}
                            buttonTextColor={"#1EA1CA"}
                            skin={"round"}
                            //logica da dependencia.
                            max={6}
                            min={1}
                            step={1}
                            arrows={true}
                            color={"#003E52"}
                            //colorMax={"#f04048"}
                            //colorMin={"#40c5f4"}
                            value={fototipo}
                            onChange={(fototipo) => {
                              setFototipo(fototipo)
                            }}
                          />
                        </Box>

                      </Center>
                    </VStack>
                  </Modal.Body>
                  <Modal.Footer>
                    <Pressable
                      flex="1"
                      onPress={() => navigation.navigate("Photo", setShowModal(false))}
                      alignItems="flex-end"
                    >
                      <Text
                        color="#1AC8FF"
                        fontSize="22"
                      >
                        Continuar
                      </Text>
                    </Pressable>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>

          </Box>
        </ImageBackground>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    fontSize: 32,
    textAlign: "left",
  },
  info: {
    marginHorizontal: 10,
    fontSize: 10,
    color: "#003E52",
    textAlign: "left",
  },
});