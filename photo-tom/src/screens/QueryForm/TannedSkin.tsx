import { FormButton } from '@components/FormButton'
import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack } from 'native-base'
import { useContext } from 'react'
import { Alert } from 'react-native'

export function TannedSkin() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { bronzeIntensity, setBronzeIntensity } =
    useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (bronzeIntensity === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('bronzeIntensity')
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <Title
        title="A pele do paciente fica bronzeada?"
        fontSize="2xl"
        textAlign="center"
        color="black"
        fontFamily="heading"
      />
      <Box mt={6}>
        <FormButton
          text="Nunca"
          onPress={() => setBronzeIntensity(0)}
          borderWidth={bronzeIntensity === 0 ? 2 : 0}
          textColor={bronzeIntensity === 0 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Raramente"
          onPress={() => setBronzeIntensity(1)}
          borderWidth={bronzeIntensity === 1 ? 2 : 0}
          textColor={bronzeIntensity === 1 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Às vezes"
          onPress={() => setBronzeIntensity(2)}
          borderWidth={bronzeIntensity === 2 ? 2 : 0}
          textColor={bronzeIntensity === 2 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Frequentemente"
          onPress={() => setBronzeIntensity(3)}
          borderWidth={bronzeIntensity === 3 ? 2 : 0}
          textColor={bronzeIntensity === 3 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Sempre"
          onPress={() => setBronzeIntensity(4)}
          borderWidth={bronzeIntensity === 4 ? 2 : 0}
          textColor={bronzeIntensity === 4 ? 'blue.500' : 'black'}
        />
      </Box>
      <Box alignItems="center" justifyContent="flex-end" flex={1}>
        <NextPage
          onPress={() => {
            validationForNextPage()
          }}
          action="Continuar"
          color="black"
        />
      </Box>
    </VStack>
  )
}