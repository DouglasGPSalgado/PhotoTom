import { React } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import {
    NativeBaseProvider,
    Box,
    Center
} from "native-base";
import FormComponent from "../components/FormComponent";

export default function Form({ navigation }) {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <ImageBackground
                    source={require("../../assets/Background.png")}
                    style={{ flex: 1 }}
                    resizeMode="cover"
                >
                    <Image
                        source={require("../../assets/image-form.png")}
                        style={{ height: 200, width: 200, alignSelf: "center" }}
                        resizeMode="contain"
                    />
                    <Center>
                        <FormComponent
                            titulo={"Qual a cor da pele do paciente antes da exposição solar?"}
                            subTitulo={""}
                            A={"Branco Marfim"}
                            B={"Pele Clara ou Pálida"}
                            C={"Pele com Tom de Ouro"}
                            D={"Castanho Claro"}
                            E={"Castanho Escuro ou Preto"}
                        />
                        {/* <NavigationButton
                            titulo={"Continue"}
                         /> */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Form2")}
                            style={styles.navigationButton}
                        >
                            <Text
                                style={styles.navigationTitle}
                            >
                                Continuar
                            </Text>
                        </TouchableOpacity>
                    </Center>
                </ImageBackground>
            </ScrollView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({

    navigationButton: {
        margin: 20,
    },
    navigationTitle: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "normal",
        color: "#19C8FF"
    }

});