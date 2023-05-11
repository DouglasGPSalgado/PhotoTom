import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import TestID from '@components/TestID'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import {
  Box,
  VStack,
  ScrollView
} from 'native-base'
import { useContext } from 'react'
import { Alert } from 'react-native'

export function EyeColor() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { eyeColor, setEyeColor } = useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (eyeColor === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('amountFreckles')
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <ScrollView>
        <Title
          title="Qual a cor dos olhos?"
          fontSize="2xl"
          textAlign="center"
          color="brown.500"
          fontFamily="heading"
        />
        <TestID />
        <Box my={6} alignItems="center" justifyContent="center">
          <FormButton
            text="Azul Claro, Cinza Claro ou Verde Claro"
            onPress={() => setEyeColor(0)}
            borderWidth={eyeColor === 0 ? 2 : 0}
            textColor={eyeColor === 0 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Azul, Cinza ou Verde"
            onPress={() => setEyeColor(1)}
            borderWidth={eyeColor === 1 ? 2 : 0}
            textColor={eyeColor === 1 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Castanho Claro ou Mel"
            onPress={() => setEyeColor(2)}
            borderWidth={eyeColor === 2 ? 2 : 0}
            textColor={eyeColor === 2 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Castanho"
            onPress={() => setEyeColor(3)}
            borderWidth={eyeColor === 3 ? 2 : 0}
            textColor={eyeColor === 3 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Marrom Escuro/Preto"
            onPress={() => setEyeColor(4)}
            borderWidth={eyeColor === 4 ? 2 : 0}
            textColor={eyeColor === 4 ? 'brown.400' : 'black'}
          />
        </Box>
        <Box alignItems="center" justifyContent="flex-end" flex={1}>
          <FormProgress index={28} />
          <NextPage
            onPress={() => {
              validationForNextPage()
            }}
            action="Continuar"
            color="brown.400"
          />
        </Box>
      </ScrollView>
    </VStack>
  )
}
