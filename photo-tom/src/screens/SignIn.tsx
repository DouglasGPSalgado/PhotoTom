import React, { useContext, useState } from 'react'
import {
  Heading,
  VStack,
  Center,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from '../contexts/auth'
import { Platform } from 'react-native'
import api from '../services/api'

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
  const [data, setData] = useState({})
  const { signed, signIn } = useAuth()

  console.log(signed)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })

  async function handleSignIn({ email, password }: FormDataProps) {
    const respose = api.post('/login', {
      email,
      password,
    })
    signIn(respose)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      flex={1}
    >
      <VStack flex={1} bgColor={'#C9F2FF'}>
        <Image
          source={require('../../assets/icon.png')}
          alt="Icon"
          alignSelf={'center'}
          mt={20}
          mb={5}
        />
        <Center
          flex={1}
          bgColor={'white'}
          mt={5}
          mx={5}
          px={8}
          borderRadius={25}
        >
          <Heading marginBottom={10} color={'#003E52'} fontSize={48}>
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
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                secureTextEntry
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Button title="Login" onPress={handleSubmit(handleSignIn)} />
        </Center>
      </VStack>
    </KeyboardAvoidingView>
  )
}
