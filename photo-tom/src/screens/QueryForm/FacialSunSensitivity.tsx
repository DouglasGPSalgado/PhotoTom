import { FormButton } from '@components/FormButton'
import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack } from 'native-base'
import { useContext } from 'react'
import { Alert } from 'react-native'

export function FacialSunSensitivity() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { facialSunSensitivity, setFacialSunSensitivity } =
    useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (facialSunSensitivity === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
    }
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <Title
        title="Qual é o grau de sensibilidade do rosto quando exposto ao sol?"
        fontSize="2xl"
        textAlign="center"
        color="black"
        fontFamily="heading"
      />
      <Box mt={6}>
        <FormButton
          text="Muito sensível"
          onPress={() => setFacialSunSensitivity(0)}
          borderWidth={facialSunSensitivity === 0 ? 2 : 0}
          textColor={facialSunSensitivity === 0 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Sensível"
          onPress={() => setFacialSunSensitivity(1)}
          borderWidth={facialSunSensitivity === 1 ? 2 : 0}
          textColor={facialSunSensitivity === 1 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Normal"
          onPress={() => setFacialSunSensitivity(2)}
          borderWidth={facialSunSensitivity === 2 ? 2 : 0}
          textColor={facialSunSensitivity === 2 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Resistente"
          onPress={() => setFacialSunSensitivity(3)}
          borderWidth={facialSunSensitivity === 3 ? 2 : 0}
          textColor={facialSunSensitivity === 3 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Muito resistente (nunca queimou)"
          onPress={() => setFacialSunSensitivity(4)}
          borderWidth={facialSunSensitivity === 4 ? 2 : 0}
          textColor={facialSunSensitivity === 4 ? 'blue.500' : 'black'}
        />
      </Box>
      <Box alignItems="center" justifyContent="flex-end" flex={1}>
        <NextPage
          onPress={() => {
            validationForNextPage()
          }}
          action="Resultados"
          color="black"
        />
      </Box>
    </VStack>
  )
}
