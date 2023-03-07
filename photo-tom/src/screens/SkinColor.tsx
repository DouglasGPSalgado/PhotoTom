import { Form } from '@components/Form'
import { NextPage } from '@components/NextPage'
import { Box, Text, VStack } from 'native-base'
import { useState } from 'react'

export function SkinColor() {
  const [data, setData] = useState<number>(0)
  console.log(data)
  return (
    <VStack px={8}>
      <Text>Qual a cor da pele do paciente antes da exposição solar?</Text>
      <Form text="Branco Marfim" onPress={() => setData(0)} />
      <Form text="Pele Clara ou Pálida" onPress={() => setData(1)} />
      <Form text="Pele com Tom de Ouro" onPress={() => setData(2)} />
      <Form text="Castanho Claro" onPress={() => setData(3)} />
      <Form text="Castanho Escuro ou Preto" onPress={() => setData(4)} />

      <Box alignItems="center">
        <NextPage onPress={() => {}} action="Continuar" />
      </Box>
    </VStack>
  )
}
