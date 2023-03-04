import GoogleIcon from '@assets/google.png'
import IconSignIn from '@assets/icon.png'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { MaterialIcons } from '@expo/vector-icons'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from 'native-base'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TouchableOpacity } from 'react-native'
import * as yup from 'yup'

import { useAuth } from '../contexts/auth'
import api from '../services/api'

global.Buffer = global.Buffer || require('buffer').Buffer

type FormDataProps = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve ter pelo menos 6 dígitos'),
})

export function SignIn() {
  const { signed, signIn } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  async function handleSignIn({ email, password }: FormDataProps) {
    console.log({ email, password })
    const token = `${email}:${password}`
    const encodedToken = Buffer.from(token).toString('base64')
    const session_url = '/auth/login/'

    const config = {
      method: 'post',
      url: session_url,
      headers: { Authorization: encodedToken },
    }
    try {
      const response = await api(config).then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <VStack flex={1} bg="white">
      <Box
        bg={{
          linearGradient: {
            colors: ['#429FBC', '#0F5C75'],
            start: [1, 0],
            end: [1, 1],
          },
        }}
        borderBottomLeftRadius="84"
        justifyContent="center"
        height={72}
        px={8}
      >
        <Center mt={6}>
          <Image source={IconSignIn} alt="Icon" />
        </Center>
        <Heading textAlign="right" color="white" mt={6} fontFamily="heading">
          Login
        </Heading>
      </Box>

      <Box rounded="3xl" shadow="2" px={8} mt={12} flex={1}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Email"
              InputLeftElement={
                <Icon
                  as={MaterialIcons}
                  name="email"
                  size={6}
                  color="gray.300"
                  ml="5"
                />
              }
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
              fontFamily="body"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              mt={4}
              placeholder="Senha"
              InputLeftElement={
                <Icon
                  as={MaterialIcons}
                  name="lock"
                  size={6}
                  ml="5"
                  color="gray.300"
                />
              }
              onChangeText={onChange}
              secureTextEntry
              value={value}
              errorMessage={errors.password?.message}
              fontFamily="body"
              returnKeyType="send"
            />
          )}
        />
        <TouchableOpacity>
          <Text
            mt={2}
            textAlign="right"
            fontFamily="body"
            fontSize="sm"
            color="blue.500"
          >
            Esqueceu a senha ?
          </Text>
        </TouchableOpacity>

        <Button title="Entrar" mt={12} onPress={handleSubmit(handleSignIn)} />

        <Flex direction="row" align="center" justifyContent="center" mt={8}>
          <Divider color="blue.500" opacity="0.7" width={24} />
          <Text px="6">ou</Text>
          <Divider color="blue.500" opacity="0.7" width={24} />
        </Flex>

        <Center mt={6}>
          <TouchableOpacity>
            <Flex direction="row" align="center">
              <Image
                source={GoogleIcon}
                height={5}
                width={5}
                alt="ícone google"
              />
              <Text color="gray.300" fontSize="sm" ml={2}>
                Conectar com Google
              </Text>
            </Flex>
          </TouchableOpacity>
        </Center>

        <Center position="absolute" bottom="12" left="0" right="0">
          <TouchableOpacity>
            <Text color="blue.500">Não possui conta? cadastre-se</Text>
          </TouchableOpacity>
        </Center>
      </Box>
    </VStack>
  )
}
