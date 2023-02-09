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

export default function Form6({ navigation }) {

    const [intencidadeBronze, setIntencidadeBronze] = useState(null);

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

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Form7")}
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