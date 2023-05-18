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

export function HairColor() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { hairColor, setHairColor } = useContext(DataDeliveryContext)

  function validationForNextPage() {
    if (hairColor === null) {
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
          onPress={() => setHairColor(0)}
          borderWidth={hairColor === 0 ? 2 : 0}
          textColor={hairColor === 0 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Loiro"
          onPress={() => setHairColor(1)}
          borderWidth={hairColor === 1 ? 2 : 0}
          textColor={hairColor === 1 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Loiro Escuro ou Castanho Claro"
          onPress={() => setHairColor(2)}
          borderWidth={hairColor === 2 ? 2 : 0}
          textColor={hairColor === 2 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Castanho"
          onPress={() => setHairColor(3)}
          borderWidth={hairColor === 3 ? 2 : 0}
          textColor={hairColor === 3 ? 'brown.400' : 'black'}
        />
        <FormButton
          text="Preto"
          onPress={() => setHairColor(4)}
          borderWidth={hairColor === 4 ? 2 : 0}
          textColor={hairColor === 4 ? 'brown.400' : 'black'}
        />
        <FormProgress index={14} />
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
