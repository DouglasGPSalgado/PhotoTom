import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Center,
  Heading,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base'
import { useState } from 'react'
import InputSpinner from 'react-native-input-spinner'

import Background from '@assets/Background.png'
import ImageHome from '@assets/image_home.png'
import Card from '@components/Card'
import { HomeHeader } from '@components/HomeHeader'
import { type AppNavigatorRoutesProps } from '@routes/app.routes'

export function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const [showModal, setShowModal] = useState(false)
  const [fototipo, setFototipo] = useState<any>(1)

  console.log(fototipo)

  return (
    <VStack flex={1}>
      <Image
        source={Background}
        resizeMode="cover"
        position="absolute"
        width="full"
        height="full"
        alt=""
      />

      <HomeHeader />

      <Center>
        <Image
          source={ImageHome}
          height={200}
          width={200}
          resizeMode="contain"
          alt=""
        />
        <Text fontSize="28" color="blue.800" fontFamily="heading">
          Escolha o tipo de análise
        </Text>
        <Heading fontSize="xs" color="blue.800">
          Caso tenha duvidas clique no botão “?” para mais detalhes
        </Heading>
      </Center>

      <Box px={10}>
        <Card
          title="Paleta de Cores"
          subtitle="Comparação visual do técnico"
          description="Análise simples onde o técnico tira uma foto do cliente e compara visualmente com uma paleta de cores + Formulário para análise minuciosa"
          action="Continuar"
          onPress={() => {
            setShowModal(true)
          }}
        />

        <Modal
          // Modal chamado pelo <Card /> para definir o fototipo.
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
              <Text fontSize="20" fontWeight="normal" color="#003E52">
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
                    fontWeight="bold"
                    color="#003E52"
                  >
                    Antes de começar, indique o fototipo que você identifica na
                    pessoa analisada.
                  </Text>
                  <Text
                    marginBottom="2"
                    textAlign="center"
                    fontSize="14"
                    fontWeight="medium"
                    color="#003E52"
                  >
                    Utilizamos esses dados para melhorar nosso método de
                    análise.
                  </Text>
                  <Box py="8">
                    <InputSpinner
                      // estilo
                      width={'80%'}
                      fontSize={28}
                      textColor={'#003E52'}
                      buttonTextColor={'#FFFFFF'}
                      skin={'round'}
                      // logica da dependencia.
                      max={6}
                      min={1}
                      step={1}
                      arrows={true}
                      color={'#003E52'}
                      // colorMax={"#f04048"}
                      // colorMin={"#40c5f4"}
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
                  navigate('Photo')
                  setShowModal(false)
                }}
                alignItems="flex-end"
              >
                <Text color="#1AC8FF" fontSize="22">
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
