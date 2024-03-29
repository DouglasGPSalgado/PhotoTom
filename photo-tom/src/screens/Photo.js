import React, { useEffect, useRef, useState, useContext } from 'react'
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { View, Text } from 'native-base'
import { StyleSheet, Image, BackHandler, Alert } from 'react-native'
import ButtonCamera from '@components/ButtonCamera'
import { useDataDelivery } from '@hooks/useDataDelivery'
import { useNavigation } from '@react-navigation/native'

export default function Photo() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const { signIn } = useDataDelivery()
  const cameraRef = useRef(null)
  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      MediaLibrary.requestPermissionsAsync()
      const cameraStatus = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted')
    })()
    const backAction = () => {
      Alert.alert('', 'Deseja voltar para a tela principal?', [
        {
          text: 'Continuar Análise',
          onPress: () => null,
        },
        {
          text: 'voltar',
          onPress: () => navigation.navigate('home'),
        },
      ])
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )
  }, [])

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync()
        setImage(data)
      } catch (e) {}
    }
  }
  const saveImage = async () => {
    if (image) {
      try {
        signIn(image)
        setImage(null)
      } catch (e) {}
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View
            flexDirection={'row'}
            justifyContent={'space-between'}
            padding={30}
          >
            <ButtonCamera
              icon={'retweet'}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back,
                )
              }}
            />
            <ButtonCamera
              icon={'flash'}
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off,
                )
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image.uri }} style={styles.camera} alt="" />
      )}
      <View>
        {image ? (
          <View
            flexDirection={'row'}
            justifyContent={'space-between'}
            paddingX={50}
          >
            <ButtonCamera
              title="Refazer Foto"
              icon="retweet"
              onPress={() => setImage(null)}
              color=""
            />
            <ButtonCamera
              title="Continuar"
              icon="check"
              onPress={saveImage}
              color=""
            />
          </View>
        ) : (
          <ButtonCamera icon="camera" onPress={takePicture} />
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingBottom: 20,
    paddingTop: 50,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
})
