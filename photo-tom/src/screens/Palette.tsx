import { NextPage } from '@components/NextPage'
import { SkinsTonePalette } from '@components/SkinsTonePalette'
import { SkinsToneDTO } from '@dtos/PaletteDTO'
import { useDataDelivery } from '@hooks/useDataDelivery'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import {
  Box,
  Center,
  FlatList,
  Heading,
  Image,
  Text,
  VStack,
} from 'native-base'
import React, { useContext, useState } from 'react'
import { Alert } from 'react-native'

import { ImageContext } from '../contexts/img'
import TestID from '@components/TestID'

const colorPalette = [
  { id: '1', color: '#D3BCA0', value: 1 },
  { id: '2', color: '#C7B297', value: 1 },
  { id: '3', color: '#C2A281', value: 1 },
  { id: '4', color: '#BBA78E', value: 2 },
  { id: '5', color: '#B8997A', value: 2 },
  { id: '6', color: '#AF8D70', value: 2 },
  { id: '7', color: '#AD9073', value: 3 },
  { id: '8', color: '#A68569', value: 3 },
  { id: '9', color: '#9C7E63', value: 3 },
  { id: '10', color: '#986B4A', value: 4 },
  { id: '11', color: '#906546', value: 4 },
  { id: '12', color: '#875F42', value: 4 },
  { id: '13', color: '#845329', value: 5 },
  { id: '14', color: '#7D4E27', value: 5 },
  { id: '15', color: '#764A25', value: 5 },
  { id: '16', color: '#46312B', value: 6 },
  { id: '17', color: '#3D2824', value: 6 },
  { id: '18', color: '#341F1C', value: 6 },
]

export function Palette() {
  const { img } = useContext(ImageContext)
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const [skinsTone, setSkinsTone] = useState<SkinsToneDTO[]>(colorPalette)
  const [nextPage, setNextPage] = useState<number | null>(null)
  const { setPalette } = useDataDelivery()

  function validationForNextPage() {
    if (nextPage === null) {
      Alert.alert('Ops', 'Selecione uma cor da paleta para continuar!')
      return
    }

    navigate('skinColor')
  }

  const onClickItem = (item: SkinsToneDTO) => {
    const newArrData = skinsTone.map((e) => {
      if (item.id === e.id) {
        return {
          ...e,
          selected: true,
        }
      }
      return {
        ...e,
        selected: false,
      }
    })
    setSkinsTone(newArrData)
  }

  return (
    <VStack flex={1} px={8} py={6} bg="white">
      <Center>
        <Heading color="brown.500" fontSize="3xl" fontFamily="heading">
          Paleta de Cores
        </Heading>

        <Text
          color="brown.500"
          textAlign="center"
          mt={1}
          fontSize="sm"
          lineHeight="sm"
        >
          Selecione a tonalidade mais aproximada da tonalidade de pele do
          cliente
        </Text>

        <Box
          mt={6}
          width="full"
          bg="white"
          rounded="2xl"
          shadow={7}
          alignItems="center"
          flexDirection="row"
          px={2}
          style={{
            height: '70%',
          }}
        >
          <FlatList
            data={skinsTone}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Box alignItems="center">
                <SkinsTonePalette
                  item={item}
                  onPress={() => {
                    onClickItem(item)
                    setPalette(item.value)
                    setNextPage(item.value)
                  }}
                  width={item.selected ? 20 : 16}
                  height={item.selected ? 20 : 16}
                  borderWidth={item.selected ? 3 : 0}
                  borderColor={item.selected ? 'yellow.500' : 'white'}
                />
              </Box>
            )}
          />
          <Box>
            <Image
              style={{ height: 170, width: 170 }}
              rounded="2xl"
              ml={5}
              source={{ uri: img.image }}
              alt="Image"
            />
            <TestID />
          </Box>
        </Box>
      </Center>
      <Box alignItems="center" justifyContent="flex-end" flex={1}>
        <NextPage
          onPress={() => {
            validationForNextPage()
          }}
          action="Continuar"
          color="brown.500"
        />
      </Box>
    </VStack>
  )
}
