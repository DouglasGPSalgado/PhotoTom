import { React, useState } from "react";
import {
  StyleSheet
} from "react-native";
import { 
  NativeBaseProvider, 
  Box, 
  Text, 
  Pressable 
} from "native-base";
import { globalStyles } from "../GlobalStyles";

export default function FormComponent(props) {

  const [onPress, setOnPress] = useState(null);

  return (

    <Box alignItems="center" width="100%">
      <Text
        style={globalStyles.titulo}
      >
        {props.titulo}
      </Text>
      <Text>{props.subTitulo}</Text>

      {/* Alternativas do Formulario */}
      <Pressable
        onPress={(value) => setValue(0)}
        style={globalStyles.formSelect}
        borderColor={onPress == 0 ? "#1EA1CA" : "#FFFFFF"}
      >
        <Box>
          <Text
            color={onPress == 0 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.A}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(onPress) => setOnPress(1)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={onPress == 1 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={onPress == 1 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.B}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(onPress) => setOnPress(2)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={onPress == 2 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={onPress == 2 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.C}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(onPress) => setOnPress(3)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={onPress == 3 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={onPress == 3 ? "#1EA1CA" : "#003E52"}
            fontSize="20"
            fontWeight="bold"
            textAlign="center"
          >
            {props.D}
          </Text>
        </Box>
      </Pressable>

      <Pressable
        onPress={(onPress) => setOnPress(4)}
        margin="2"
        alignItems="center"
        justifyContent="center"
        width="85%"
        height="16"
        bg="#FFFFFF"
        borderWidth="3"
        borderColor={onPress == 4 ? "#1EA1CA" : "#FFFFFF"}
        borderRadius={8}
        shadow="7"
      >
        <Box>
          <Text
            color={onPress == 4 ? "#1EA1CA" : "#003E52"}
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

const styles = StyleSheet.create({

  titulo: {
    fontSize: 38,
    fontWeight: "normal",
    color: "#003E52",
    textAlign: "center"
  }

});