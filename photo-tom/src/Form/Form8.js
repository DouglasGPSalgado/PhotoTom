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

export default function Form8({ navigation }) {
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
                            titulo={"Qual é o grau de sensibilidade do rosto quando exposto ao sol?"}
                            subTitulo={""}
                            A={"Muito sensível"}
                            B={"Sensível"}
                            C={"Normal"}
                            D={"Resistente"}
                            E={"Muito resistente (nunca queimou)"}
                        />
                        {/* <NavigationButton
                            titulo={"Continue"}
                         /> */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}
                            style={styles.navigationButton}
                        >
                            <Text
                                style={styles.navigationTitle}
                            >
                                Finalizar
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