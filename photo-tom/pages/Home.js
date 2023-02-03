import { React } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NativeBaseProvider, Box } from "native-base";

import Card from "../components/Card";
import GradientText from "../components/GradientText";

import Form from "../components/FormComponent";

export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <ScrollView style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground
          source={require("../assets/Background.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          {/* <View
            flexDirection={"row"}
          >
            <Text>Teste</Text>
          </View> */}
          <Box
            //Viel trocada por Box na Native Base
            alignItems="center"
          >
            <Image
              source={require("../assets/image_home.png")}
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

            <Form 
              titulo={"Qual a cor da pele do paciente antes da exposição solar?"}
              subTitulo={""}
              A={"Branco Marfim"}
              B={"Pele Clara ou Pálida"}
              C={"Pele com Tom de Ouro"}
              D={"Castanho Claro"}
              E={"Castanho Escuro ou Preto"}
            />
            <Card
              titulo={"Paleta de Cores"}
              subTitulo={"Comparação visual do técnico"}
              descricao={
                "Análise simples onde o técnico tira uma foto do cliente e compara visualmente com uma paleta de cores + Formulário para análise minuciosa"
              }
              acaoPrimaria={"Continuar"}
            />
            <Card
              titulo={"Reconhecimento de Imagem"}
              subTitulo={"Visão computacional"}
              descricao={
                "Reconhecimento de fototipo visual automática a partir de foto do local do procedimento + Formulário para análise minuciosa"
              }
              acaoPrimaria={"Continuar"}
            />
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
