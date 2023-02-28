import { Box, Center, Heading, Text, VStack } from 'native-base'
import { TitleResults } from '../components/TitleResults'

export default function Results () {
  return (
    <VStack px={8} flex={1} backgroundColor='white'>
      <Center>
        <TitleResults title='Resultado:' />

        <Heading fontSize='xs' fontFamily='heading' textAlign='center' color='blue.800' mt='3'>
          *Este tipo de análise não substitui a consulta médica,
          ele apenas complementa a avaliação de um especialista*
        </Heading>

        <Box>
          <Text mt='16' fontSize='3xl' color='blue.800'>
            Fototipo III
          </Text>
        </Box>

        <Box rounded="full" justifyContent='center' alignItems='center' backgroundColor='blue.100' height={20} width={20}>
          <Text>
            85%
          </Text>
        </Box>

      </Center>

    </VStack>

  )
}
