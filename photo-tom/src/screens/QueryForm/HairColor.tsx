import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import TestID from '@components/TestID'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack, ScrollView } from 'native-base'
import { useContext, useState } from 'react'
import { Alert } from 'react-native'

export function HairColor() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { hairColor, setHairColor } = useContext(DataDeliveryContext)
  const [select, setSelect] = useState(null)

  function validationForNextPage() {
    if (select === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }

    navigate('eyeColor')
  }

  return (
    <VStack flex={1} m={0} p={6} bg="white">
      <Title
        title="Qual a cor natural do cabelo?"
        fontSize="2xl"
        textAlign="center"
        color="brown.500"
        fontFamily="heading"
      />

      <TestID />

      <Box mt={6}>
        <FormButton
          text="Ruivo ou Loiro Claro"
          onPress={() => setSelect(0)}
          borderWidth={select === 0 ? 2 : 0}
          textColor={select === 0 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Loiro"
          onPress={() => setSelect(1)}
          borderWidth={select === 1 ? 2 : 0}
          textColor={select === 1 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Loiro Escuro ou Castanho Claro"
          onPress={() => setSelect(2)}
          borderWidth={select === 2 ? 2 : 0}
          textColor={select === 2 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Castanho"
          onPress={() => setSelect(3)}
          borderWidth={select === 3 ? 2 : 0}
          textColor={select === 3 ? 'brown.400' : 'black'}
        />

        <FormButton
          text="Preto"
          onPress={() => setSelect(4)}
          borderWidth={select === 4 ? 2 : 0}
          textColor={select === 4 ? 'brown.400' : 'black'}
        />

        <FormProgress index={14} />

        <NextPage
          onPress={() => {
            setHairColor(select)
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
