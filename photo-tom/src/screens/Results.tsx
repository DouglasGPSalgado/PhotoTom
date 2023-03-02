import { Box, Center, Flex, Progress, Text, VStack } from 'native-base'

import { NextPage } from '@components/NextPage'
import { TitleResults } from '@components/TitleResults'

export default function Results() {
  return (
    <VStack p={8} flex={1} bg="white">
      <Center>
        <TitleResults title="Resultado:" fontSize="4xl" fontFamily="heading" />

        <Box
          rounded="full"
          justifyContent="center"
          alignItems="center"
          mt="4"
          borderWidth="6"
          borderColor="blue.600"
          height="48"
          width="48"
        >
          <Text fontSize="3xl">III</Text>
          <Text fontSize="2xl">Fototipo</Text>
        </Box>
      </Center>

      <TitleResults
        title="Graus de semelhança:"
        textAlign="center"
        mt="12"
        fontSize="2xl"
        fontFamily="heading"
      />

      <Flex
        width="full"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={6}
      >
        <Text fontSize="xl" fontFamily="heading">
          IV
        </Text>
        <Progress
          value={40}
          width="56"
          size="2xl"
          colorScheme="blue"
          color="blue.300"
        />
        <Text fontSize="lg" fontFamily="heading">
          85.71%
        </Text>
      </Flex>

      <Center position="absolute" bottom="0" left="0" right="0" p={8}>
        <Text
          fontSize="xs"
          fontFamily="heading"
          textAlign="center"
          color="blue.800"
          mb={2}
        >
          *Este tipo de análise não substitui a consulta médica, ele apenas
          complementa a avaliação de um especialista*
        </Text>
        <NextPage action="Continuar" onPress={() => {}} />
      </Center>
    </VStack>
  )
}
