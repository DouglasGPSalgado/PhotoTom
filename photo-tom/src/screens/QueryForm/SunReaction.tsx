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

export function SunReaction() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { sunReaction, setSunReaction } = useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (sunReaction === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('facialSunSensitivity')
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <ScrollView>
        <Title
          title="Como a pele reage ao Sol?"
          fontSize="2xl"
          textAlign="center"
          color="brown.500"
          fontFamily="heading"
        />
        <TestID />
        <Box my={6} alignItems="center" justifyContent="center">
          <FormButton
            text="Sempre queima, forma bolhas e descama"
            onPress={() => setSunReaction(0)}
            borderWidth={sunReaction === 0 ? 2 : 0}
            textColor={sunReaction === 0 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Quase sempre queima, forma bolhas e descama"
            onPress={() => setSunReaction(1)}
            borderWidth={sunReaction === 1 ? 2 : 0}
            textColor={sunReaction === 1 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="De vez em quando queima"
            onPress={() => setSunReaction(2)}
            borderWidth={sunReaction === 2 ? 2 : 0}
            textColor={sunReaction === 2 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Raramente queima"
            onPress={() => setSunReaction(3)}
            borderWidth={sunReaction === 3 ? 2 : 0}
            textColor={sunReaction === 3 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Nunca queima"
            onPress={() => setSunReaction(4)}
            borderWidth={sunReaction === 4 ? 2 : 0}
            textColor={sunReaction === 4 ? 'brown.400' : 'black'}
          />
        </Box>
        <Box alignItems="center" justifyContent="flex-end" flex={1}>
          <FormProgress index={84} />
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
