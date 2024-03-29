import { FormButtonModal } from '@components/FormButtonModal'
import { NextPage } from '@components/NextPage'
import TestID from '@components/TestID'
import { Title } from '@components/Title'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { useDataDelivery } from '@hooks/useDataDelivery'
import { useNavigation } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '@routes/app.routes'
import {
  Box,
  Center,
  Divider,
  Flex,
  Modal,
  Pressable,
  Progress,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import React, { useState, useEffect, useContext } from 'react'
import { Alert, BackHandler } from 'react-native'

export function Results() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const { results, putResults } = useDataDelivery()
  const [showModal, setShowModal] = useState(false)
  const { techRating, setTechRating } = useContext(DataDeliveryContext)
  const phototypeResults = results[0][0]
  const [select, setSelect] = useState(null)

  function validationForNextPage() {
    setTechRating(select)
    if (select === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }
    if (techRating != null) {
      putResults()
    }
  }

  useEffect(() => {
    const backAction = () => {
      Alert.alert('', 'Não é possível retornar ao formulário!.', [
        {
          text: 'Continuar Análise',
          onPress: () => null,
        },
      ])
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )
  }, [])

  return (
    <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
      <VStack p={8} flex={1} bg="white">
        <Center>
          <Title
            title="Resultado:"
            fontSize="4xl"
            fontFamily="heading"
            color="brown.500"
          />
          <Box
            rounded="full"
            justifyContent="center"
            alignItems="center"
            mt="4"
            borderWidth="6"
            borderColor="brown.500"
            height="56"
            width="56"
          >
            <Text fontSize="3xl" color="brown.300">
              {(phototypeResults === 0 && 'I') ||
                (phototypeResults === 1 && 'II') ||
                (phototypeResults === 2 && 'III') ||
                (phototypeResults === 3 && 'IV') ||
                (phototypeResults === 4 && 'V') ||
                (phototypeResults === 5 && 'VI')}
            </Text>

            <Text fontSize="2xl" color="brown.300">
              Fototipo
            </Text>
          </Box>
        </Center>

        <Divider mt="6" color="black" shadow="2" />

        <Title
          title="Graus de semelhança:"
          textAlign="center"
          mt="8"
          fontSize="2xl"
          fontFamily="heading"
          color="brown.500"
        />

        <>
          <TestID />
        </>

        {results.map((data: any, index) => {
          return (
            <Flex
              key={index}
              width="full"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={6}
            >
              <Text color="black" fontSize="xl" fontFamily="heading">
                {(data[0] === 0 && 'I') ||
                  (data[0] === 1 && 'II') ||
                  (data[0] === 2 && 'III') ||
                  (data[0] === 3 && 'IV') ||
                  (data[0] === 4 && 'V') ||
                  (data[0] === 5 && 'VI')}
              </Text>

              <Progress
                value={data[1]}
                width="56"
                size="2xl"
                _filledTrack={{
                  bg: 'brown.500',
                }}
              />

              <Text color="black" fontSize="lg" fontFamily="heading">
                {data[1]}
              </Text>
            </Flex>
          )
        })}

        <Center mt={10} justifyContent="flex-end" flex={1}>
          <Text
            fontSize="xs"
            fontFamily="heading"
            textAlign="center"
            color="brown.500"
            mb={2}
          >
            *Este tipo de análise não substitui a consulta médica, ele apenas
            complementa a avaliação de um especialista*
          </Text>
          <NextPage
            color="brown.500"
            action="Continuar"
            onPress={() => setShowModal(true)}
          />
        </Center>

        {/* Modal feedback */}
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false)
          }}
          size="lg"
          shadow="7"
        >
          <Modal.Content width="80%">
            <Modal.Header>
              <Text fontSize="20" fontFamily="heading" color="brown.500">
                Feedback
              </Text>
            </Modal.Header>
            <Modal.Body>
              <VStack space={3}>
                <Center>
                  <Text
                    marginBottom="2"
                    textAlign="center"
                    fontSize="20"
                    color="brown.500"
                    fontFamily="body"
                  >
                    Com base em sua experiência, o fototipo resultante da
                    análise está:
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="12"
                    color="brown.500"
                    fontFamily="body"
                    mb={6}
                  >
                    Utilizamos esses dados para melhorar nosso método de análise
                  </Text>

                  <FormButtonModal
                    text="Acima do esperado"
                    onPress={() => setSelect(2)}
                    borderWidth={select === 2 ? 2 : 0}
                    textColor={select === 2 ? 'brown.400' : 'black'}
                  />

                  <FormButtonModal
                    text="Correto"
                    onPress={() => setSelect(1)}
                    borderWidth={select === 1 ? 2 : 0}
                    textColor={select === 1 ? 'brown.400' : 'black'}
                  />

                  <FormButtonModal
                    text="Abaixo do esperado"
                    onPress={() => setSelect(0)}
                    borderWidth={select === 0 ? 2 : 0}
                    textColor={select === 0 ? 'brown.400' : 'black'}
                  />
                </Center>
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Pressable
                flex="1"
                onPress={() => {
                  validationForNextPage()
                }}
                alignItems="flex-end"
              >
                <Text color="brown.300" fontSize="22">
                  Continuar
                </Text>
              </Pressable>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </VStack>
    </ScrollView>
  )
}
