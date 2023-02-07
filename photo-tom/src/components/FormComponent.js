import { React, useState } from "react";
import {
    Box,
    Text,
    Pressable,
    NativeBaseProvider
} from "native-base";
import {
    TouchableOpacity
} from "react-native";
function Form(props) {

    const [contador, setContador] = useState(null);

    return (

        <Box
            alignItems="center"
        >
            <Text
                fontSize="20"
                fontWeight="normal"
                color="#003E52"
                textAlign="center"
            >
                {props.titulo}
            </Text>
            <Text>
                {props.subTitulo}
            </Text>

            {/* Alternativas do Formulario */}
            <Pressable
                onPress={(contador) => setContador(1)}
                margin="2"
                alignItems="center"
                justifyContent="center"
                width="90%"
                height="16"
                bg="#FFFFFF"
                borderWidth="3"
                borderColor={contador == 1 ? "#1EA1CA" : "#FFFFFF"}
                borderRadius={8}
                shadow="7"
            >
                <Box
                >
                    <Text
                        color={contador == 1 ? "#1EA1CA" : "##003E52"}
                        fontSize="24"
                        fontWeight="bold"
                    >
                        {props.A}
                    </Text>
                </Box>
            </Pressable>

            <Pressable
                margin="2"
                alignItems="center"
                justifyContent="center"
                width="90%"
                height="16"
                bg="#FFFFFF"
                borderRadius={8}
                shadow="7"
                _focus={{
                    borderWidth: 1,
                    borderColor: "primary.300"
                }}
            >
                <Box
                >
                    <Text
                        color="#003E52"
                        fontSize="24"
                        fontWeight="bold"
                    >
                        {props.B}
                    </Text>
                </Box>
            </Pressable>

            <Pressable
                margin="2"
                alignItems="center"
                justifyContent="center"
                width="90%"
                height="16"
                bg="#FFFFFF"
                borderRadius={8}
                shadow="7"
            >
                <Box
                >
                    <Text
                        color="#003E52"
                        fontSize="24"
                        fontWeight="bold"
                    >
                        {props.C}
                    </Text>
                </Box>
            </Pressable>

            <Pressable
                margin="2"
                alignItems="center"
                justifyContent="center"
                width="90%"
                height="16"
                bg="#FFFFFF"
                borderRadius={8}
                shadow="7"
            >
                <Box
                >
                    <Text
                        color="#003E52"
                        fontSize="24"
                        fontWeight="bold"
                    >
                        {props.D}
                    </Text>
                </Box>
            </Pressable>

            <Pressable
                margin="2"
                alignItems="center"
                justifyContent="center"
                width="90%"
                height="16"
                bg="#FFFFFF"
                borderRadius={8}
                shadow="7"
            >
                <Box
                >
                    <Text
                        color="#003E52"
                        fontSize="24"
                        fontWeight="bold"
                    >
                        {props.E}
                    </Text>
                </Box>
            </Pressable>

        </Box>
    );
} export default Form;