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

export default function Form7({ navigation }) {

    const [reacaoSolar, setReacaoSolar] = useState(null);
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
                            Como a pele reage ao Sol?
                        </Text>
                        <Pressable
                            onPress={(reacaoSolar) => setReacaoSolar(0)}
                            style={globalStyles.formSelect}
                            borderColor={reacaoSolar == 0 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={reacaoSolar == 0 ? "#1EA1CA" : "#003E52"}
                            >
                                Sempre queima, forma bolhas e descama
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(reacaoSolar) => setReacaoSolar(1)}
                            style={globalStyles.formSelect}
                            borderColor={reacaoSolar == 1 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={reacaoSolar == 1 ? "#1EA1CA" : "#003E52"}
                            >
                                Quase sempre queima, forma bolhas e descama
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(reacaoSolar) => setReacaoSolar(2)}
                            style={globalStyles.formSelect}
                            borderColor={reacaoSolar == 2 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={reacaoSolar == 2 ? "#1EA1CA" : "#003E52"}
                            >
                                De vez em quando queima
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(reacaoSolar) => setReacaoSolar(3)}
                            style={globalStyles.formSelect}
                            borderColor={reacaoSolar == 3 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={reacaoSolar == 3 ? "#1EA1CA" : "#003E52"}
                            >
                                Raramente queima
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(reacaoSolar) => setReacaoSolar(4)}
                            style={globalStyles.formSelect}
                            borderColor={reacaoSolar == 4 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={reacaoSolar == 4 ? "#1EA1CA" : "#003E52"}
                            >
                                Nunca queima
                            </Text>
                        </Pressable>

                        {
                            reacaoSolar == null ? (
                                <NavigationButton
                                    onPress={validacao}
                                    titulo={"Continuar"}
                                />
                            ) : 
                            <NavigationButton
                                onPress={() => navigation.navigate("Form8")}
                                titulo={"Continuar"}
                            />
                        }

                    </Center>
                </ImageBackground>
            </ScrollView>
        </NativeBaseProvider>
    );
};