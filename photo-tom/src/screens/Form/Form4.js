import { React, useState } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { NativeBaseProvider, Box, Center, Text, Pressable } from 'native-base'
import { globalStyles } from '../../GlobalStyles'
import NavigationButton from '@components/NavigationButton'

export default function Form4({ navigation, route }) {
  const [quantidadeSardas, setQuantidadeSardas] = useState(null)
  const validacao = () =>
    Alert.alert('Ops', 'Selecione uma das alternativas para continuar!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])

  return (
    <NativeBaseProvider>
      <ScrollView>
        <ImageBackground
          source={require('@assets/Background.png')}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <Image
            source={require('@assets/image-form.png')}
            style={{ height: 200, width: 200, alignSelf: 'center' }}
            resizeMode="contain"
            alt=""
          />

          <Center>
            <Text style={globalStyles.formTitle}>
              Qual é a quantidade de sardas na pele em áreas que não estão
              expostas?
            </Text>
            <Pressable
              onPress={(quantidadeSardas) => setQuantidadeSardas(0)}
              style={globalStyles.formSelect}
              borderColor={quantidadeSardas === 0 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={quantidadeSardas === 0 ? '#1EA1CA' : '#003E52'}
              >
                Muitas
              </Text>
            </Pressable>

            <Pressable
              onPress={(quantidadeSardas) => setQuantidadeSardas(1)}
              style={globalStyles.formSelect}
              borderColor={quantidadeSardas === 1 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={quantidadeSardas === 1 ? '#1EA1CA' : '#003E52'}
              >
                Várias
              </Text>
            </Pressable>

            <Pressable
              onPress={(quantidadeSardas) => setQuantidadeSardas(2)}
              style={globalStyles.formSelect}
              borderColor={quantidadeSardas === 2 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={quantidadeSardas === 2 ? '#1EA1CA' : '#003E52'}
              >
                Algumas
              </Text>
            </Pressable>

            <Pressable
              onPress={(quantidadeSardas) => setQuantidadeSardas(3)}
              style={globalStyles.formSelect}
              borderColor={quantidadeSardas === 3 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={quantidadeSardas === 3 ? '#1EA1CA' : '#003E52'}
              >
                Muito poucas
              </Text>
            </Pressable>

            <Pressable
              onPress={(quantidadeSardas) => setQuantidadeSardas(4)}
              style={globalStyles.formSelect}
              borderColor={quantidadeSardas === 4 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={quantidadeSardas === 4 ? '#1EA1CA' : '#003E52'}
              >
                Nenhuma
              </Text>
            </Pressable>

            {quantidadeSardas === null ? (
              <NavigationButton onPress={validacao} titulo={'Continuar'} />
            ) : (
              <NavigationButton
                onPress={() =>
                  navigation.navigate('Form5', { Resposta4: quantidadeSardas })
                }
                titulo={'Continuar'}
              />
            )}
          </Center>
        </ImageBackground>
      </ScrollView>
    </NativeBaseProvider>
  )
}
