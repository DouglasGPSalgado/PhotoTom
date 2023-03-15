import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
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
import { useState } from 'react'
import NumericInput from 'react-native-numeric-input'

export function Results() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const { results } = useDataDelivery()
  const [showModal, setShowModal] = useState(false)
  const [finalGuess, setFinalGuess] = useState(0)
  const phototypeResults = results[0][0]

  return (
    <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
      <VStack p={8} flex={1} bg="green">
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
              {(phototypeResults === 1 && 'I') ||
                (phototypeResults === 2 && 'II') ||
                (phototypeResults === 3 && 'III') ||
                (phototypeResults === 4 && 'IV') ||
                (phototypeResults === 5 && 'V') ||
                (phototypeResults === 6 && 'VI')}
            </Text>

            <Text fontSize="2xl" color="brown.300">
              Fototipo
            </Text>
          </Box>
        </Center>

        <Divider mt="6" color="black" shadow="6" />

        <Title
          title="Graus de semelhança:"
          textAlign="center"
          mt="8"
          fontSize="2xl"
          fontFamily="heading"
          color="brown.500"
        />

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
                {(data[0] === 1 && 'I') ||
                  (data[0] === 2 && 'II') ||
                  (data[0] === 3 && 'III') ||
                  (data[0] === 4 && 'IV') ||
                  (data[0] === 5 && 'V') ||
                  (data[0] === 6 && 'VI')}
              </Text>

              <Progress
                value={data[1]}
                width="56"
                size="2xl"
                colorScheme="cyan"
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
                    <NumericInput
                      type="plus-minus"
                      editable={false}
                      totalHeight={48}
                      totalWidth={180}
                      minValue={1}
                      maxValue={6}
                      borderColor="transparent"
                      rounded
                      rightButtonBackgroundColor="#EAD1B2"
                      leftButtonBackgroundColor="#EAD1B2"
                      containerStyle={{
                        borderRadius: 50,
                      }}
                      value={finalGuess}
                      onChange={(finalGuess: number) => {
                        setFinalGuess(finalGuess)
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
      </VStack>
    </ScrollView>
  )
}
