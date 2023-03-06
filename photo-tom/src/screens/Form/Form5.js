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

export default function Form5({ navigation, route }) {
  const [bronze, setBonze] = useState(null)
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
              A pele do paciente fica bronzeada?
            </Text>
            <Pressable
              onPress={(bronze) => setBonze(0)}
              style={globalStyles.formSelect}
              borderColor={bronze === 0 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={bronze === 0 ? '#1EA1CA' : '#003E52'}
              >
                Nunca
              </Text>
            </Pressable>

            <Pressable
              onPress={(bronze) => setBonze(1)}
              style={globalStyles.formSelect}
              borderColor={bronze === 1 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={bronze === 1 ? '#1EA1CA' : '#003E52'}
              >
                Raramente
              </Text>
            </Pressable>

            <Pressable
              onPress={(bronze) => setBonze(2)}
              style={globalStyles.formSelect}
              borderColor={bronze === 2 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={bronze === 2 ? '#1EA1CA' : '#003E52'}
              >
                Às vezes
              </Text>
            </Pressable>

            <Pressable
              onPress={(bronze) => setBonze(3)}
              style={globalStyles.formSelect}
              borderColor={bronze === 3 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={bronze === 3 ? '#1EA1CA' : '#003E52'}
              >
                Frequentemente
              </Text>
            </Pressable>

            <Pressable
              onPress={(bronze) => setBonze(4)}
              style={globalStyles.formSelect}
              borderColor={bronze === 4 ? '#1EA1CA' : '#FFFFFF'}
              shadow="7"
            >
              <Text
                style={globalStyles.formSelectTitle}
                color={bronze === 4 ? '#1EA1CA' : '#003E52'}
              >
                Sempre
              </Text>
            </Pressable>

            {bronze === null ? (
              <NavigationButton onPress={validacao} titulo={'Continuar'} />
            ) : (
              <NavigationButton
                onPress={() =>
                  navigation.navigate('Form6', { Resposta5: bronze })
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
