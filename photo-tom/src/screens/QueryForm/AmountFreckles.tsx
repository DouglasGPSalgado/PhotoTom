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

  const { amountFreckles, setAmountFreckles } = useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (amountFreckles === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('tannedSkin')
  }

  return (
    <VStack flex={1} p={8} bg="white">
      <Title
        title="Quantidade de sardas na pele em áreas que não estão expostas?"
        fontSize={20}
        color="brown.500"
        textAlign="center"
        fontFamily="heading"
        h={16}
      />
      <Box mt={6}>
        <FormButton
          text="Muitas"
          onPress={() => setAmountFreckles(0)}
          borderWidth={amountFreckles === 0 ? 2 : 0}
          textColor={amountFreckles === 0 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Várias"
          onPress={() => setAmountFreckles(1)}
          borderWidth={amountFreckles === 1 ? 2 : 0}
          textColor={amountFreckles === 1 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Algumas"
          onPress={() => setAmountFreckles(2)}
          borderWidth={amountFreckles === 2 ? 2 : 0}
          textColor={amountFreckles === 2 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Muito poucas"
          onPress={() => setAmountFreckles(3)}
          borderWidth={amountFreckles === 3 ? 2 : 0}
          textColor={amountFreckles === 3 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Nenhuma"
          onPress={() => setAmountFreckles(4)}
          borderWidth={amountFreckles === 4 ? 2 : 0}
          textColor={amountFreckles === 4 ? 'brown.400' : 'black'}
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
