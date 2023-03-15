import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack } from 'native-base'
import { useContext } from 'react'
import { Alert } from 'react-native'

export function BronzeIntensity() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { tannedSkin, setTannedSkin } = useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (tannedSkin === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('SunReaction')
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <Title
        title="Com que intensidade a pele do paciente fica bronzeada?"
        fontSize="2xl"
        textAlign="center"
        color="brown.500"
        fontFamily="heading"
      />
      <Box mt={6}>
        <FormButton
          text="Pouco ou muito pouco"
          onPress={() => setTannedSkin(0)}
          borderWidth={tannedSkin === 0 ? 2 : 0}
          textColor={tannedSkin === 0 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Levemente"
          onPress={() => setTannedSkin(1)}
          borderWidth={tannedSkin === 1 ? 2 : 0}
          textColor={tannedSkin === 1 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Moderadamente"
          onPress={() => setTannedSkin(2)}
          borderWidth={tannedSkin === 2 ? 2 : 0}
          textColor={tannedSkin === 2 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Profundamente"
          onPress={() => setTannedSkin(3)}
          borderWidth={tannedSkin === 3 ? 2 : 0}
          textColor={tannedSkin === 3 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="A pele é naturalmente escura"
          onPress={() => setTannedSkin(4)}
          borderWidth={tannedSkin === 4 ? 2 : 0}
          textColor={tannedSkin === 4 ? 'brown.400' : 'black'}
        />
        <FormProgress
          index={70}
        />
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
    </VStack>
  )
}
