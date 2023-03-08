import { FormButton } from '@components/FormButton'
import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack } from 'native-base'
import { useContext } from 'react'
import { Alert } from 'react-native'

export function AmountFreckles() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { AmountFreckles, setAmountFreckles } = useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (AmountFreckles === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('tannedSkin')
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <Title
        title=" Qual é a quantidade de sardas na pele em áreas que não estão
        expostas?"
        fontSize="2xl"
        textAlign="center"
        color="black"
        fontFamily="heading"
      />
      <Box mt={6}>
        <FormButton
          text="Muitas"
          onPress={() => setAmountFreckles(0)}
          borderWidth={AmountFreckles === 0 ? 2 : 0}
          textColor={AmountFreckles === 0 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Várias"
          onPress={() => setAmountFreckles(1)}
          borderWidth={AmountFreckles === 1 ? 2 : 0}
          textColor={AmountFreckles === 1 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Algumas"
          onPress={() => setAmountFreckles(2)}
          borderWidth={AmountFreckles === 2 ? 2 : 0}
          textColor={AmountFreckles === 2 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Muito poucas"
          onPress={() => setAmountFreckles(3)}
          borderWidth={AmountFreckles === 3 ? 2 : 0}
          textColor={AmountFreckles === 3 ? 'blue.500' : 'black'}
        />
        <FormButton
          text="Nenhuma"
          onPress={() => setAmountFreckles(4)}
          borderWidth={AmountFreckles === 4 ? 2 : 0}
          textColor={AmountFreckles === 4 ? 'blue.500' : 'black'}
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
