import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import TestID from '@components/TestID'
import { Title } from '@components/Title'
import { useAuth } from '@contexts/auth'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, HStack, Spinner, VStack, ScrollView } from 'native-base'
import { useContext, useState } from 'react'
import { Alert, BackHandler } from 'react-native'

export function FacialSunSensitivity() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const [isLoading, setIsLoading] = useState(false)

  const { facialSunSensitivity, setFacialSunSensitivity, postResults } =
    useContext(DataDeliveryContext)

  async function validationForNextPage() {
    try {
      setIsLoading(true)

      if (facialSunSensitivity === null) {
        Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
        return
      }

      await postResults()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <VStack flex={1} p={6} bg="white">
      <Title
        title="Qual é o grau de sensibilidade do rosto quando exposto ao sol?"
        fontSize="22"
        textAlign="center"
        color="brown.500"
        fontFamily="heading"
      />
      <TestID />
      <Box mt={6}>
        <FormButton
          text="Muito sensível"
          onPress={() => setFacialSunSensitivity(0)}
          borderWidth={facialSunSensitivity === 0 ? 2 : 0}
          textColor={facialSunSensitivity === 0 ? 'brown.500' : 'black'}
        />
        <FormButton
          text="Sensível"
          onPress={() => setFacialSunSensitivity(1)}
          borderWidth={facialSunSensitivity === 1 ? 2 : 0}
          textColor={facialSunSensitivity === 1 ? 'brown.500' : 'black'}
        />
        <FormButton
          text="Normal"
          onPress={() => setFacialSunSensitivity(2)}
          borderWidth={facialSunSensitivity === 2 ? 2 : 0}
          textColor={facialSunSensitivity === 2 ? 'brown.500' : 'black'}
        />
        <FormButton
          text="Resistente"
          onPress={() => setFacialSunSensitivity(3)}
          borderWidth={facialSunSensitivity === 3 ? 2 : 0}
          textColor={facialSunSensitivity === 3 ? 'brown.500' : 'black'}
        />
        <FormButton
          text="Muito resistente (nunca queimou)"
          onPress={() => setFacialSunSensitivity(4)}
          borderWidth={facialSunSensitivity === 4 ? 2 : 0}
          textColor={facialSunSensitivity === 4 ? 'brown.500' : 'black'}
        />
        <FormProgress index={95} />
        <NextPage
          onPress={() => {
            validationForNextPage()
          }}
          action="Resultados"
          color="brown.400"
          alignSelf={'center'}
          marginY={2}
        />
      </Box>
    </VStack>
  )
}
