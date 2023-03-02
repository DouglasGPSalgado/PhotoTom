import React from 'react'
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  Center,
  Image,
} from 'native-base'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve ter pelo menos 6 dígitos'),
  password_confirm: yup
    .string()
    .required('Informe a confirmação de senha')
    .oneOf([yup.ref('password'), null], 'A confirmação de senha não é igual.'),
})

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  })

  function handleSignUp(data: FormDataProps) {
    console.log(data)
  }

  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor={'#C9F2FF'}>
        <Image
          source={require('../../assets/icon.png')}
          alt="Icon"
          alignSelf={'center'}
          marginTop={30}
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
            Cadastro
          </Heading>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />
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
          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Confirmar senha"
                onChangeText={onChange}
                secureTextEntry
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />
          <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
        </Center>
      </VStack>
    </NativeBaseProvider>
  )
}
