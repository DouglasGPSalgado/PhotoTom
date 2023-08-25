import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack} from 'native-base'
import { useContext, useState } from 'react'
import { Alert } from 'react-native'
import TestID from '@components/TestID'

export function AmountFreckles() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { amountFreckles, setAmountFreckles } = useContext(DataDeliveryContext)
  const [select, setSelect] = useState(null)

  function validationForNextPage() {
    if (select === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }
    setAmountFreckles(select)
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
          onPress={() => setSelect(0)}
          borderWidth={select === 0 ? 2 : 0}
          textColor={select === 0 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Várias"
          onPress={() => setSelect(1)}
          borderWidth={select === 1 ? 2 : 0}
          textColor={select === 1 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Algumas"
          onPress={() => setSelect(2)}
          borderWidth={select === 2 ? 2 : 0}
          textColor={select === 2 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Muito poucas"
          onPress={() => setSelect(3)}
          borderWidth={select === 3 ? 2 : 0}
          textColor={select === 3 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Nenhuma"
          onPress={() => setSelect(4)}
          borderWidth={select === 4 ? 2 : 0}
          textColor={select === 4 ? 'brown.400' : 'black'}
        />

        {
          (select === null) ? <FormProgress index={39} />
            : <FormProgress index={52} />
        }

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