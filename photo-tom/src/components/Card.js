import { React, useState } from "react";
import {
    TouchableOpacity
} from "react-native";
import {
    NativeBaseProvider,
    Box,
    Text,
} from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card(props) {

    const [detalhes, setDetalhes] = useState(false);
    const navigation = useNavigation();
    return (

        <NativeBaseProvider>
            <Box
                width="90%"
                margin="4"
                padding="4"
                alignSelf="center"
                alignItems="center"
                justifyContent="center"
                bg="#FFFFFF"
                borderRadius="8"
                shadow="7"
            >
                <Box
                    flexDirection="row"
                >
                    <Box
                        alignItems="center"
                        justifyContent="center"
                        width="90%"
                    >
                        <Text
                            textAlign="center"
                            fontSize="18"
                            fontWeight="bold"
                            color="#003E52"
                        >
                            {props.titulo}
                        </Text>
                    </Box>
                    <Box
                        width="15%"
                        alignItems="center"
                    >
                        <TouchableOpacity
                            style={styles.detalhes}
                            onPress={(detalhes) => setDetalhes(true)}
                        >
                            <Text
                                fontSize="16"
                                fontWeight="bold"
                                color="#FFFFFF"
                            >
                                ?
                            </Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
                <Text
                    fontSize="12"
                    fontWeight="normal"
                    color="#003E52"
                >
                    {props.subTitulo}
                </Text>
                {
                    (detalhes == true) ?
                        <Text
                            textAlign="center"
                            fontSize="16"
                            fontWeight="medium"
                            color="#003E52"
                        >
                            {props.descricao}
                        </Text>
                        : <>
                        </>
                }
                <TouchableOpacity
                      onPress={() => {

                        navigation.navigate("Photo");
                
                      }}
                >
                    <Text
                        margin="2"
                        fontSize="20"
                        color="#00B707"
                    >
                        {props.acaoPrimaria}
                    </Text>
                </TouchableOpacity>
            </Box>
        </NativeBaseProvider >
    );

} export default Card;

const styles = StyleSheet.create({

    detalhes: {
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#003E52",
    },

});