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
    TouchableOpacity
} from "react-native";
import {
    NativeBaseProvider,
    Box,
    Center,
    Text,
    Pressable
} from "native-base";
import { globalStyles } from "../GlobalStyles";

export default function Form3({ navigation }) {

    const [corOlhos, setCorOlhos] = useState(null);

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
                                 Azul Claro, Cinza Verde Claro
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

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Form4")}
                            style={globalStyles.navigationButton}
                        >
                            <Text
                                margin="6"
                                fontSize="28"
                                fontWeight="normal"
                                color="#19C8FF"
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