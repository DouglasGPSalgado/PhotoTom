import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack, ScrollView } from 'native-base'
import { useContext } from 'react'
import { Alert } from 'react-native'
import TestID from '@components/TestID'

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
    <VStack flex={1} p={6} bg="white">
      <Title
        title="Quantidade de sardas ou pintas na pele em áreas não expostas?"
        fontSize={21}
        color="brown.500"
        textAlign="center"
        fontFamily="heading"
      />
      <TestID />
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
        <FormProgress index={42} />
        <NextPage
          onPress={() => {
            validationForNextPage()
          }}
          action="Continuar"
          color="brown.400"
          alignSelf={'center'}
          marginY={2}
        />
      </Box>
    </VStack>
  )
}
