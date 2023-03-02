import React, { useState } from "react";
import {
  Heading,
  VStack,
  Center,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../contexts/auth";
import { Platform } from "react-native";
import api from "../services/api";

global.Buffer = global.Buffer || require("buffer").Buffer;

type FormDataProps = {
  email: string;
  passwords: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  passwords: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
});

export function SignIn() {
  const { signed, signIn } = useAuth();

  console.log(signed);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  async function handleSignIn({ email, passwords }: FormDataProps) {
    console.log(email, passwords);

    var username = email;
    var password = passwords;

    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token).toString("base64");
    const session_url = "/auth/login/";

    var config = {
      method: "post",
      url: session_url,
      headers: { Authorization: encodedToken },
    };

    const response = await api(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("banana");
    console.log(response);
    signIn(response);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      flex={1}
    >
      <VStack flex={1} bgColor={"#C9F2FF"}>
        <Image
          source={require("../../assets/icon.png")}
          alt="Icon"
          alignSelf={"center"}
          mt={20}
          mb={5}
        />
        <Center
          flex={1}
          bgColor={"white"}
          mt={5}
          mx={5}
          px={8}
          borderRadius={25}
        >
          <Heading marginBottom={10} color={"#003E52"} fontSize={48}>
            Login
          </Heading>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Email"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
                fontFamily={"body"}
              />
            )}
          />
          <Controller
            control={control}
            name="passwords"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                secureTextEntry
                errorMessage={errors.passwords?.message}
                fontFamily={"body"}
              />
            )}
          />
          <Button title="Login" onPress={handleSubmit(handleSignIn)} />
        </Center>
      </VStack>
    </KeyboardAvoidingView>
  );
}
