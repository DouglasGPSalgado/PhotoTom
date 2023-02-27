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

export default function Form6({ navigation }) {

    const [intencidadeBronze, setIntencidadeBronze] = useState(null);
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
                        >
                            Com que intensidade a pele do paciente fica bronzeada?
                        </Text>
                        <Pressable
                            onPress={(intencidadeBronze) => setIntencidadeBronze(0)}
                            style={globalStyles.formSelect}
                            borderColor={intencidadeBronze == 0 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={intencidadeBronze == 0 ? "#1EA1CA" : "#003E52"}
                            >
                                Pouco ou muito pouco 
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(intencidadeBronze) => setIntencidadeBronze(1)}
                            style={globalStyles.formSelect}
                            borderColor={intencidadeBronze == 1 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={intencidadeBronze == 1 ? "#1EA1CA" : "#003E52"}
                            >
                                Levemente
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(intencidadeBronze) => setIntencidadeBronze(2)}
                            style={globalStyles.formSelect}
                            borderColor={intencidadeBronze == 2 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={intencidadeBronze == 2 ? "#1EA1CA" : "#003E52"}
                            >
                                Moderadamente
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(intencidadeBronze) => setIntencidadeBronze(3)}
                            style={globalStyles.formSelect}
                            borderColor={intencidadeBronze == 3 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={intencidadeBronze == 3 ? "#1EA1CA" : "#003E52"}
                            >
                                Profundamente
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(intencidadeBronze) => setIntencidadeBronze(4)}
                            style={globalStyles.formSelect}
                            borderColor={intencidadeBronze == 4 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={intencidadeBronze == 4 ? "#1EA1CA" : "#003E52"}
                            >
                                A pele é naturalmente escura
                            </Text>
                        </Pressable>

                        {
                            intencidadeBronze == null ? (
                                <NavigationButton
                                    onPress={validacao}
                                    titulo={"Continuar"}
                                />
                            ) : 
                            <NavigationButton
                                onPress={() => navigation.navigate("Form7")}
                                titulo={"Continuar"}
                            />
                        }

                    </Center>
                </ImageBackground>
            </ScrollView>
        </NativeBaseProvider>
    );
};