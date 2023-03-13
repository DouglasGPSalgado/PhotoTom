import GoogleIcon from '@assets/google.png'
import IconSignIn from '@assets/IconSignIn.png'
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
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Platform, TouchableOpacity } from 'react-native'
import * as yup from 'yup'

import { useAuth } from '../contexts/auth'
import api from '../services/api'

import { encode, decode } from 'js-base64'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'

if (!global.btoa) {
  global.btoa = encode
}

if (!global.atob) {
  global.atob = decode
}

type FormDataProps = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(8, 'A senha deve ter pelo menos 8 dígitos'),
})

export function SignIn() {
  const { signed, signIn } = useAuth()
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      const response = await api.post(
        'auth/login',
        {},
        {
          auth: {
            username: email,
            password,
          },
        },
      )
      signIn(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <VStack flex={1} bg="white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        flex={1}
      >
        <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
          <Box
            bg={{
              linearGradient: {
                colors: ['#D8B490', '#ebd4be'],
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
            <Heading
              textAlign="right"
              color="white"
              mt={6}
              fontFamily="heading"
            >
              Login
            </Heading>
          </Box>

          <Box px={8} mt={12} flex={1}>
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
                color="brown.500"
              >
                Esqueceu a senha ?
              </Text>
            </TouchableOpacity>

            <Button
              title="Entrar"
              mt={12}
              onPress={handleSubmit(handleSignIn)}
            />

            <Flex direction="row" align="center" justifyContent="center" mt={8}>
              <Divider color="brown.500" opacity="0.7" width={24} />
              <Text px="6">ou</Text>
              <Divider color="brown.500" opacity="0.7" width={24} />
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

            <Center mt="16" mb={6}>
              <TouchableOpacity>
                <Text color="brown.500">Não possui conta? cadastre-se</Text>
              </TouchableOpacity>
            </Center>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  )
}
