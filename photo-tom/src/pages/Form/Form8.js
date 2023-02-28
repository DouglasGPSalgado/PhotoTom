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
import { globalStyles } from "../../GlobalStyles";
import NavigationButton from "../../components/NavigationButton";

export default function Form8({ navigation, route }) {

    const {corPele} = route.params;
    console.log(route.params.corPele)

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
                    source={require("../../../assets/Background.png")}
                    style={{ flex: 1 }}
                    resizeMode="cover"
                >
                    <Image
                        source={require("../../../assets/image-form.png")}
                        style={{ height: 200, width: 200, alignSelf: "center" }}
                        resizeMode="contain"
                    />

                    <Center>
                        <Text
                            style={globalStyles.formTitle}
                        >{route.params.corPele} X
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
                            sensibilidadeFacial == null ? (
                                <NavigationButton
                                    onPress={validacao}
                                    titulo={"Finalizar"}
                                />
                            ) : 
                            <NavigationButton
                                onPress={() => navigation.navigate("home")}
                                titulo={"Finalizar"}
                            />
                        }

                    </Center>
                </ImageBackground>
            </ScrollView>
        </NativeBaseProvider>
    );
};