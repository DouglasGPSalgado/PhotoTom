import { React, useState } from "react";
import { NativeBaseProvider, Box, Text, Pressable } from "native-base";
export default function FormComponent(props) {
  const [contador, setContador] = useState(null);

  return (
    <Box alignItems="center" width="100%">
      <Text
        fontSize="20"
        fontWeight="normal"
        color="#003E52"
        textAlign="center"
      >
        {props.titulo}
      </Text>
      <Text>{props.subTitulo}</Text>

      {/* Alternativas do Formulario */}
      <Pressable
        onPress={(contador) => setContador(1)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={contador == 1 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={contador == 1 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.A}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(contador) => setContador(2)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={contador == 2 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={contador == 2 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.B}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(contador) => setContador(3)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={contador == 3 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={contador == 3 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.C}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(contador) => setContador(4)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={contador == 4 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={contador == 4 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.D}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(contador) => setContador(5)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={contador == 5 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={contador == 5 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.E}
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
}
