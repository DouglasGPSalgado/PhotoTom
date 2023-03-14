import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'
import { useDataDelivery } from '@hooks/useDataDelivery'
import {
  Box,
  Center,
  Divider,
  Flex,
  Progress,
  ScrollView,
  Text,
  VStack,
} from 'native-base'

export function Results() {
  const { results } = useDataDelivery()

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
            {results.map((data: any, index) => (
              <Text key={index} fontSize="3xl" color="brown.300">
                {data[0]}
              </Text>
            ))}
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
                {data[0]}
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

        <Center mt={8} justifyContent="flex-end" flex={1}>
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
          <NextPage color="brown.500" action="Continuar" onPress={() => {}} />
        </Center>
      </VStack>
    </ScrollView>
  )
}
