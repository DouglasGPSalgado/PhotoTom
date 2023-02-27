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

export default function Form2({ navigation }) {

    const [corCabelo, setCorCabelo] = useState(null);
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
                            Qual a cor natural do cabelo?
                        </Text>
                        <Pressable
                            onPress={(corCabelo) => setCorCabelo(0)}
                            style={globalStyles.formSelect}
                            borderColor={corCabelo == 0 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corCabelo == 0 ? "#1EA1CA" : "#003E52"}
                            >
                                Ruivo ou Loiro Claro
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corCabelo) => setCorCabelo(1)}
                            style={globalStyles.formSelect}
                            borderColor={corCabelo == 1 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corCabelo == 1 ? "#1EA1CA" : "#003E52"}
                            >
                                Loiro
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corCabelo) => setCorCabelo(2)}
                            style={globalStyles.formSelect}
                            borderColor={corCabelo == 2 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corCabelo == 2 ? "#1EA1CA" : "#003E52"}
                            >
                                Loiro Escuro ou Castanho Claro
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corCabelo) => setCorCabelo(3)}
                            style={globalStyles.formSelect}
                            borderColor={corCabelo == 3 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corCabelo == 3 ? "#1EA1CA" : "#003E52"}
                            >
                                Castanho
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={(corCabelo) => setCorCabelo(4)}
                            style={globalStyles.formSelect}
                            borderColor={corCabelo == 4 ? "#1EA1CA" : "#FFFFFF"}
                            shadow="7"
                        >
                            <Text
                                style={globalStyles.formSelectTitle}
                                color={corCabelo == 4 ? "#1EA1CA" : "#003E52"}
                            >
                                Preto
                            </Text>
                        </Pressable>

                        {
                            corCabelo == null ? (
                                <NavigationButton
                                    onPress={validacao}
                                    titulo={"Continuar"}
                                />
                            ) : 
                            <NavigationButton
                                onPress={() => navigation.navigate("Form3")}
                                titulo={"Continuar"}
                            />
                        }

                    </Center>
                </ImageBackground>
            </ScrollView>
        </NativeBaseProvider>
    );
};