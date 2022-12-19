import { React } from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";

import Card from "../components/Card";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <ImageBackground
        source={require("../assets/Background.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <View>
          <Image
            source={require("../assets/image_home.png")}
            style={{ height: 140, width: 140, alignSelf: "center" }}
          />
          <Text style={styles.title}>Escolha o tipo de análise</Text>
          <Text style={styles.info}>
            Caso tenha duvidas clique no botão “?” para mais detalhes
          </Text>
        </View>
        <Card
          titulo={"PALETA DE CORES"}
          subTitulo={"Comparação visual do técnico"}
          acaoPrimaria={"Continuar"}
        />
        <Card
          titulo={"Reconhecimento de Imagem"}
          subTitulo={"Visão computacional"}
          acaoPrimaria={"Continuar"}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: "#003E52",
    textAlign:"left",
    left:35
  },
  info: {
    fontSize: 10,
    color: "#003E52",
    textAlign:"left",
    left:35
},
});
