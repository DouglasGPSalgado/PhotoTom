import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import TestID from '@components/TestID'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack, ScrollView } from 'native-base'
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title
          title="A pele do paciente fica bronzeada?"
          fontSize="2xl"
          textAlign="center"
          color="brown.500"
          fontFamily="heading"
        />
        <TestID />
        <Box mt={6}>
          <FormButton
            text="Nunca"
            onPress={() => setBronzeIntensity(0)}
            borderWidth={bronzeIntensity === 0 ? 2 : 0}
            textColor={bronzeIntensity === 0 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Raramente"
            onPress={() => setBronzeIntensity(1)}
            borderWidth={bronzeIntensity === 1 ? 2 : 0}
            textColor={bronzeIntensity === 1 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Às vezes"
            onPress={() => setBronzeIntensity(2)}
            borderWidth={bronzeIntensity === 2 ? 2 : 0}
            textColor={bronzeIntensity === 2 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Frequentemente"
            onPress={() => setBronzeIntensity(3)}
            borderWidth={bronzeIntensity === 3 ? 2 : 0}
            textColor={bronzeIntensity === 3 ? 'brown.400' : 'black'}
          />
          <FormButton
            text="Sempre"
            onPress={() => setBronzeIntensity(4)}
            borderWidth={bronzeIntensity === 4 ? 2 : 0}
            textColor={bronzeIntensity === 4 ? 'brown.400' : 'black'}
          />
          <FormProgress index={56} />
        </Box>
        <Box alignItems="center" justifyContent="flex-end" flex={1}>
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
