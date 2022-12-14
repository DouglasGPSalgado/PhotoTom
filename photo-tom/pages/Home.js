import { React } from "react";
import { View, SafeAreaView, Text} from "react-native";
import Card from "../components/Card";
export default function Home({ navigation }) {
    return (
        <SafeAreaView>
            <View>
                <Text>
                    Escolha o tipo
                    de análise
                </Text>
                <Text>
                    Caso tenha duvidas clique no botão “?”
                    para mais detalhes
                </Text>
                <Card
                    titulo={"JP corno"}
                    subTitulo={"JP muito corrno, vc não ta entendendo"}
                    acaoPrimaria={"Continuar"}
                />
            </View>
        </SafeAreaView>
    );
};