import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Center,
  Heading,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base'
import React, { useState } from 'react'
import InputSpinner from 'react-native-input-spinner'

import Circle from '@assets/Circle.png'
import ImageHome from '@assets/image_home.png'
import Card from '@components/Card'
import { HomeHeader } from '@components/HomeHeader'
import { type AppNavigatorRoutesProps } from '@routes/app.routes'
import { useDataDelivery } from '@hooks/useDataDelivery'
import { border } from 'native-base/lib/typescript/theme/styled-system'
import { Alert } from 'react-native'

export function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const [showModal, setShowModal] = useState(false)
  const [fototipo, setFototipo] = useState<any>(0)

  return (
    <VStack flex={1} bg="white">
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
          <Card
            title="Reconhecimento de imagem"
            subtitle="Visão computacional"
            description="Reconhecimento de fototipo visual automática a partir de foto do local do procedimento + Formulário para análise minuciosa"
            action="Continuar"
            onPress={() => {
              Alert.alert('Em construção', 'Funcionalidade em construção')
            }}
            mt={4}
          />
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
                    Antes de começar, indique o fototipo que você identifica na
                    pessoa analisada.
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
                  <Box py="8">
                    <InputSpinner
                      fontSize={28}
                      width="80%"
                      skin="round"
                      max={6}
                      min={1}
                      step={1}
                      arrows={true}
                      color="#986B4A"
                      value={fototipo}
                      onChange={(fototipo) => {
                        setFototipo(fototipo)
                      }}
                    />
                  </Box>
                </Center>
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Pressable
                flex="1"
                onPress={() => {
                  navigate('photo')
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
    </VStack>
  )
}
