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

export function SkinColor() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { skinColor, setSkinColor } = useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (skinColor === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('hairColor')
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <ScrollView>
        <Title
          title="Qual a cor da pele do paciente antes da exposição solar ?"
          fontSize="2xl"
          textAlign="center"
          color="brown.500"
          fontFamily="heading"
        />
        <TestID />
        <Box my={6} alignItems="center" justifyContent="center">
          <FormButton
            text="Branco Marfim"
            onPress={() => setSkinColor(0)}
            borderWidth={skinColor === 0 ? 2 : 0}
            textColor={skinColor === 0 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Pele Clara ou Pálida"
            onPress={() => setSkinColor(1)}
            borderWidth={skinColor === 1 ? 2 : 0}
            textColor={skinColor === 1 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Pele com Tom de Ouro"
            onPress={() => setSkinColor(2)}
            borderWidth={skinColor === 2 ? 2 : 0}
            textColor={skinColor === 2 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Castanho Claro"
            onPress={() => setSkinColor(3)}
            borderWidth={skinColor === 3 ? 2 : 0}
            textColor={skinColor === 3 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Castanho Escuro ou Preto"
            onPress={() => setSkinColor(4)}
            borderWidth={skinColor === 4 ? 2 : 0}
            textColor={skinColor === 4 ? 'brown.400' : 'black'}
          />
        </Box>
        <Box alignItems="center" justifyContent="flex-end" flex={1}>
          <FormProgress index={0} />
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
