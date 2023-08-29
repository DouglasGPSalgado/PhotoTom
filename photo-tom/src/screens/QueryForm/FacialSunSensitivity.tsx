import { FormButton } from '@components/FormButton'
import FormProgress from '@components/FormProgress'
import { NextPage } from '@components/NextPage'
import TestID from '@components/TestID'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Box, VStack, Modal, Center, Text, Spinner } from 'native-base'
import { useContext, useState } from 'react'
import { Alert } from 'react-native'

export function FacialSunSensitivity() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { facialSunSensitivity, setFacialSunSensitivity, postResults, results } =
    useContext(DataDeliveryContext)
  const [select, setSelect] = useState(null)
  // console.log(DataDeliveryContext)
  const [showModal, setShowModal] = useState(false)

  function validationForNextPage() {
    if (select === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }
    setFacialSunSensitivity(select)
    postResults()
  }



  return (
    <VStack flex={1} p={6} bg="white">
      <Title
        title="Qual é o grau de sensibilidade do rosto quando exposto ao sol?"
        fontSize="22"
        textAlign="center"
        color="brown.500"
        fontFamily="heading"
      />

      <TestID />

      <Box mt={6}>
        <FormButton
          text="Muito sensível"
          onPress={() => setSelect(0)}
          borderWidth={select === 0 ? 2 : 0}
          textColor={select === 0 ? 'brown.500' : 'black'}
        />

        <FormButton
          text="Sensível"
          onPress={() => setSelect(1)}
          borderWidth={select === 1 ? 2 : 0}
          textColor={select === 1 ? 'brown.500' : 'black'}
        />

        <FormButton
          text="Normal"
          onPress={() => setSelect(2)}
          borderWidth={select === 2 ? 2 : 0}
          textColor={select === 2 ? 'brown.500' : 'black'}
        />

        <FormButton
          text="Resistente"
          onPress={() => setSelect(3)}
          borderWidth={select === 3 ? 2 : 0}
          textColor={select === 3 ? 'brown.500' : 'black'}
        />

        <FormButton
          text="Muito resistente (nunca queimou)"
          onPress={() => setSelect(4)}
          borderWidth={select === 4 ? 2 : 0}
          textColor={select === 4 ? 'brown.500' : 'black'}
        />

        {select === null ? (
          <FormProgress index={95} />
        ) : (
          <FormProgress index={100} />
        )}

        <NextPage
          onPress={() => {
            validationForNextPage()
          }}
          action="Resultados"
          color="brown.400"
          alignSelf={'center'}
          marginY={2}
        />

      </Box>
    </VStack>
  )
}