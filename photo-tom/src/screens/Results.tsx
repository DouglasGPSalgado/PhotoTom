import { Box, Center, Divider, Flex, Progress, Text, VStack } from 'native-base'

import { NextPage } from '@components/NextPage'
import { Title } from '@components/Title'

export function Results() {
  return (
    <VStack p={8} flex={1} bg="green">
      <Center>
        <Title
          title="Resultado:"
          fontSize="4xl"
          fontFamily="heading"
          color="blue.800"
        />
        <Box
          rounded="full"
          justifyContent="center"
          alignItems="center"
          mt="4"
          borderWidth="6"
          borderColor="blue.400"
          height="56"
          width="56"
        >
          <Text fontSize="3xl">III</Text>
          <Text fontSize="2xl">Fototipo</Text>
        </Box>
      </Center>

      <Divider mt="6" color="black" shadow="6" />

      <Title
        title="Graus de semelhança:"
        textAlign="center"
        mt="8"
        fontSize="2xl"
        fontFamily="heading"
        color="blue.800"
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
        <Progress value={56} width="56" size="2xl" colorScheme="" />
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
