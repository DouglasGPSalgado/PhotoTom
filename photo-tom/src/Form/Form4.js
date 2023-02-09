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

export default function Form4({ navigation }) {

    const [quantidadeSardas, setQuantidadeSardas] = useState(null);

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
                            Qual é a quantidade de sardas na pele em áreas que não estão expostas?
                        </Text>
                        <Pressable
                            onPress={(quantidadeSardas) => setQuantidadeSardas(0)}
                            style={globalStyles.formSelect}
                            borderColor={quantidadeSardas == 0 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={quantidadeSardas == 0 ? "#1EA1CA" : "#003E52"}
                            >
                                Muitas
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(quantidadeSardas) => setQuantidadeSardas(1)}
                            style={globalStyles.formSelect}
                            borderColor={quantidadeSardas == 1 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={quantidadeSardas == 1 ? "#1EA1CA" : "#003E52"}
                            >
                                Várias
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(quantidadeSardas) => setQuantidadeSardas(2)}
                            style={globalStyles.formSelect}
                            borderColor={quantidadeSardas == 2 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={quantidadeSardas == 2 ? "#1EA1CA" : "#003E52"}
                            >
                                Algumas
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(quantidadeSardas) => setQuantidadeSardas(3)}
                            style={globalStyles.formSelect}
                            borderColor={quantidadeSardas == 3 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={quantidadeSardas == 3 ? "#1EA1CA" : "#003E52"}
                            >
                                Muito poucas
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(quantidadeSardas) => setQuantidadeSardas(4)}
                            style={globalStyles.formSelect}
                            borderColor={quantidadeSardas == 4 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={quantidadeSardas == 4 ? "#1EA1CA" : "#003E52"}
                            >
                                Nenhuma
                            </Text>
                        </Pressable>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Form5")}
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