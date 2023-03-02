import {
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
import { globalStyles } from "../../GlobalStyles";
import NavigationButton from "../../components/NavigationButton";
import { useNavigation } from "@react-navigation/native";

export default function Form8({ navigation, route }) {
    //const { navigate } = useNavigation()
    console.log(route)
    const { Respsota6 } = route.params;
    const { Resposta7 } = route.params;

    const [sensibilidadeFacial, setSensibilidadeFacial] = useState(null);
    const validacao = () =>
        Alert.alert(
            'Ops',
            'Selecione uma das alternativas para finalisar a análise!',
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

                        <Text>itemId: {JSON.stringify(Respsota6)}</Text>
                        <Text>otherParam: {JSON.stringify(Resposta7)}</Text>
                        <Text
                            style={globalStyles.formTitle}
                        >
                            Qual é o grau de sensibilidade do rosto quando exposto ao sol?
                        </Text>

                        <Pressable
                            onPress={(sensibilidadeFacial) => setSensibilidadeFacial(0)}
                            style={globalStyles.formSelect}
                            borderColor={sensibilidadeFacial == 0 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={sensibilidadeFacial == 0 ? "#1EA1CA" : "#003E52"}
                            >
                                Muito sensível
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(sensibilidadeFacial) => setSensibilidadeFacial(1)}
                            style={globalStyles.formSelect}
                            borderColor={sensibilidadeFacial == 1 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={sensibilidadeFacial == 1 ? "#1EA1CA" : "#003E52"}
                            >
                                Sensível
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(sensibilidadeFacial) => setSensibilidadeFacial(2)}
                            style={globalStyles.formSelect}
                            borderColor={sensibilidadeFacial == 2 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={sensibilidadeFacial == 2 ? "#1EA1CA" : "#003E52"}
                            >
                                Normal
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(sensibilidadeFacial) => setSensibilidadeFacial(3)}
                            style={globalStyles.formSelect}
                            borderColor={sensibilidadeFacial == 3 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={sensibilidadeFacial == 3 ? "#1EA1CA" : "#003E52"}
                            >
                                Resistente
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(sensibilidadeFacial) => setSensibilidadeFacial(4)}
                            style={globalStyles.formSelect}
                            borderColor={sensibilidadeFacial == 4 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={sensibilidadeFacial == 4 ? "#1EA1CA" : "#003E52"}
                            >
                                Muito resistente (nunca queimou)
                            </Text>
                        </Pressable>

                        {
                            sensibilidadeFacial === null ? (
                                <NavigationButton
                                    onPress={validacao}
                                    titulo={"Finalizar"}
                                />
                            ) :
                                <NavigationButton
                                    titulo={"Finalizar"}
                                />
                        }

                    </Center>
                </ImageBackground>
            </ScrollView>
        </NativeBaseProvider>
    );
};