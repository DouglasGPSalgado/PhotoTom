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
import FormComponent from "../../components/FormComponent";
import NavigationButton from "../../components/NavigationButton";

export default function Form({ navigation }) {

    const [corPele, setCorPele] = useState(null);

    const validacao = () =>
        Alert.alert(
            'Ops',
            'Selecione uma das alternativas para continuar!',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );

    return (
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
                        {/* <FormComponent
                            titulo={"Qual a cor da pele do paciente antes da exposição solar?"}
                            A={"Branco Marfim"} 
                            B={"Pele Clara ou Pálida"}
                            C={"Pele com Tom de Ouro"}
                            D={"Castanho Claro"}
                            E={"Castanho Escuro ou Preto"}
                        /> */}
                        <Text
                            style={globalStyles.formTitle}
                        >
                            Qual a cor da pele do paciente antes da exposição solar?
                        </Text>
                        <Pressable
                            onPress={(corPele) => setCorPele(0)}
                            style={globalStyles.formSelect}
                            borderColor={corPele == 0 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corPele == 0 ? "#1EA1CA" : "#003E52"}
                            >
                                Branco Marfim
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corPele) => setCorPele(1)}
                            style={globalStyles.formSelect}
                            borderColor={corPele == 1 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corPele == 1 ? "#1EA1CA" : "#003E52"}
                            >
                                Pele Clara ou Pálida
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corPele) => setCorPele(2)}
                            style={globalStyles.formSelect}
                            borderColor={corPele == 2 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corPele == 2 ? "#1EA1CA" : "#003E52"}
                            >
                                Pele com Tom de Ouro
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corPele) => setCorPele(3)}
                            style={globalStyles.formSelect}
                            borderColor={corPele == 3 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corPele == 3 ? "#1EA1CA" : "#003E52"}
                            >
                                Castanho Claro
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corPele) => setCorPele(4)}
                            style={globalStyles.formSelect}
                            borderColor={corPele == 4 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corPele == 4 ? "#1EA1CA" : "#003E52"}
                            >
                                Castanho Escuro ou Preto
                            </Text>
                        </Pressable>

                        {
                            corPele == null ? (
                                <NavigationButton
                                    onPress={validacao}
                                    titulo={"Continuar"}
                                />
                            ) : 
                            <NavigationButton
                                onPress={() => navigation.navigate("Form2")}
                                titulo={"Continuar"}
                            />
                        }

                    </Center>
                </ImageBackground>
            </ScrollView>
    );
};