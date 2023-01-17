import { React } from "react";
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import Card from "../components/Card";
import GradientText from "../components/GradientText";

export default function Home({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, flexDirection: "column" }}>
      <ImageBackground
        source={require("../assets/Background.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={{ alignItems: "center" }}>
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
        </View>
        <View style={{ paddingVertical: "5%" }}>
          <Card
            titulo={"PALETA DE CORES"}
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
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "left",
  },
  info: {
    fontSize: 10,
    color: "#003E52",
    textAlign: "left",
  },
});
