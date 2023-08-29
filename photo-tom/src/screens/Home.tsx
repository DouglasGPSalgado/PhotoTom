import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Center,
  Heading,
  Modal,
  Pressable,
  Text,
  VStack,
  ScrollView,
} from 'native-base'
import { useContext, useState } from 'react'

import Card from '@components/Card'
import { HomeHeader } from '@components/HomeHeader'
import { type AppNavigatorRoutesProps } from '@routes/app.routes'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'
import { Alert } from 'react-native'
import TestID from '@components/TestID'
import { FormButtonModal } from '@components/FormButtonModal'

export function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const { setInitialGuess } = useContext(DataDeliveryContext)
  const [select, setSelect] = useState(null)

  const [showModal, setShowModal] = useState(false)

  function validationForNextPage() {
    if (select === null) {
      Alert.alert('Ops', 'Selecione uma das alternativas para continuar!')
      return
    }
    setInitialGuess(select)
    navigate('photo')
  }

  return (
    <VStack flex={1} bg="white">
      <ScrollView>
        <Box
          position="absolute"
          right="10"
          roundedBottomLeft="full"
          roundedBottomRight="full"
          roundedRight="full"
          bg={{
            linearGradient: {
              colors: ['#ffefdb', '#ebd4be', '#e9c9a8'],
              start: [1, 0],
              end: [1, 1],
            },
          }}
          style={{ height: 421, width: 421 }}
        />

        <HomeHeader />

        <Box p={8} mt={10} flex={1}>
          <Box width={56}>
            <Heading fontSize="3xl" color="brown.500" fontFamily="heading">
              Escolha o tipo de análise
            </Heading>
            <Text fontSize="xs" color="brown.500">
              Caso tenha duvidas clique no botão “?” para mais detalhes
            </Text>
          </Box>

          <Box justifyContent="center" flex={1}>
            <Card
              title="Paleta de Cores"
              subtitle="Comparação visual do técnico"
              description="Análise simples onde o técnico tira uma foto do cliente e compara visualmente com uma paleta de cores + Formulário para análise minuciosa"
              action="Continuar"
              onPress={() => {
                setShowModal(true)
              }}
            />

            <TestID />

            <Card
              title="Reconhecimento de Imagem"
              subtitle="Visão computacional"
              description="Reconhecimento de fototipo visual automática a partir de foto do local do procedimento + Formulário para análise minuciosa"
              action="Continuar"
              onPress={() => {
                Alert.alert('Em construção', 'Funcionalidade em construção')
              }}
              mt={4}
            />

            <Box my="8">
              <Text color="red.300" fontSize="xs">
                É possível que encontre erros ou falhas no app, reporte ao nosso
                suporte:
              </Text>
              <Text color="red.300" fontSize="xs" fontWeight="bold">
                phototom.suporte@gmail.com
              </Text>
            </Box>
          </Box>

          <Modal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false)
            }}
            size="lg"
            shadow="7"
          >
            <Modal.Content width="80%">
              <Modal.CloseButton />
              <Modal.Header>
                <Text fontSize="20" fontFamily="heading" color="brown.500">
                  Fototipo
                </Text>
              </Modal.Header>
              <Modal.Body>
                <VStack space={3}>
                  <Center>
                    <Text
                      marginBottom="2"
                      textAlign="center"
                      fontSize="22"
                      color="brown.500"
                      fontFamily="body"
                    >
                      Antes de começar, indique o fototipo que você identifica
                      na pessoa analisada.
                    </Text>
                    <Text
                      marginBottom="2"
                      textAlign="center"
                      fontSize="14"
                      color="brown.500"
                      fontFamily="body"
                    >
                      Utilizamos esses dados para melhorar nosso método de
                      análise.
                    </Text>

                    <FormButtonModal
                      text="Fototipo I"
                      onPress={() => setSelect(0)}
                      borderWidth={select === 0 ? 2 : 0}
                      textColor={select === 0 ? 'brown.400' : 'black'}
                    />

                    <FormButtonModal
                      text="Fototipo II"
                      onPress={() => setSelect(1)}
                      borderWidth={select === 1 ? 2 : 0}
                      textColor={select === 1 ? 'brown.400' : 'black'}
                    />

                    <FormButtonModal
                      text="Fototipo III"
                      onPress={() => setSelect(2)}
                      borderWidth={select === 2 ? 2 : 0}
                      textColor={select === 2 ? 'brown.400' : 'black'}
                    />

                    <FormButtonModal
                      text="Fototipo IV"
                      onPress={() => setSelect(3)}
                      borderWidth={select === 3 ? 2 : 0}
                      textColor={select === 3 ? 'brown.400' : 'black'}
                    />

                    <FormButtonModal
                      text="Fototipo V"
                      onPress={() => setSelect(4)}
                      borderWidth={select === 4 ? 2 : 0}
                      textColor={select === 4 ? 'brown.400' : 'black'}
                    />

                    <FormButtonModal
                      text="Fototipo VI"
                      onPress={() => setSelect(5)}
                      borderWidth={select === 5 ? 2 : 0}
                      textColor={select === 5 ? 'brown.400' : 'black'}
                    />
                  </Center>
                </VStack>
              </Modal.Body>
              <Modal.Footer>
                <Pressable
                  flex="1"
                  onPress={() => {
                    validationForNextPage()
                    setShowModal(false)
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
        </Box>
      </ScrollView>
    </VStack>
  )
}
