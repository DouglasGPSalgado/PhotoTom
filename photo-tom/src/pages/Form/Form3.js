import {
    React,
    useState
} from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert
} from "react-native";
import {
    NativeBaseProvider,
    Box,
    Center,
    Text,
    Pressable
} from "native-base";
import { globalStyles } from "../GlobalStyles";
import NavigationButton from "../components/NavigationButton";

export default function Form3({ navigation }) {

    const [corOlhos, setCorOlhos] = useState(null);
    const validacao = () =>
        Alert.alert(
            'Ops',
            'Selecione uma das alternativas para continuar!',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );

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
                        <Text
                            style={globalStyles.formTitle}
                        >
                            Qual a cor dos olhos?
                        </Text>
                        <Pressable
                            onPress={(corOlhos) => setCorOlhos(0)}
                            style={globalStyles.formSelect}
                            borderColor={corOlhos == 0 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corOlhos == 0 ? "#1EA1CA" : "#003E52"}
                            >
                                 Azul Claro, Cinza Claro ou Verde Claro
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corOlhos) => setCorOlhos(1)}
                            style={globalStyles.formSelect}
                            borderColor={corOlhos == 1 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corOlhos == 1 ? "#1EA1CA" : "#003E52"}
                            >
                                Azul, Cinza ou Verde
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corOlhos) => setCorOlhos(2)}
                            style={globalStyles.formSelect}
                            borderColor={corOlhos == 2 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corOlhos == 2 ? "#1EA1CA" : "#003E52"}
                            >
                                Castanho Claro ou Mel
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corOlhos) => setCorOlhos(3)}
                            style={globalStyles.formSelect}
                            borderColor={corOlhos == 3 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corOlhos == 3 ? "#1EA1CA" : "#003E52"}
                            >
                                Castanho
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corOlhos) => setCorOlhos(4)}
                            style={globalStyles.formSelect}
                            borderColor={corOlhos == 4 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corOlhos == 4 ? "#1EA1CA" : "#003E52"}
                            >
                                Marrom Escuro/Preto
                            </Text>
                        </Pressable>

                        {
                            corOlhos == null ? (
                                <NavigationButton
                                    onPress={validacao}
                                    titulo={"Continuar"}
                                />
                            ) : 
                            <NavigationButton
                                onPress={() => navigation.navigate("Form4")}
                                titulo={"Continuar"}
                            />
                        }

                    </Center>
                </ImageBackground>
            </ScrollView>
        </NativeBaseProvider>
    );
};