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

export default function Form2({ navigation }) {

    const [corCabelo, setCorCabelo] = useState(null);

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

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Form3")}
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