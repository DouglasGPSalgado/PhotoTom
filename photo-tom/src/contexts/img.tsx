import { useNavigation } from '@react-navigation/native'
import React, { createContext, ReactNode, useState } from 'react'

type paletteDTO = {
  image: string | undefined
}

export type ImagePaletteData = {
  img: paletteDTO
  signIn: (image: string) => void
}

type PaletteProviderProps = {
  children: ReactNode
}

export const ImageContext = createContext<ImagePaletteData>(
  {} as ImagePaletteData,
)

export default function ImageProvider({ children }: PaletteProviderProps) {
  const [img, setImg] = useState<paletteDTO>({} as paletteDTO)
  const navigation = useNavigation()

  function signIn(image: string) {
    if (image !== null) {
      setImg({
        image,
      })
      navigation.navigate('Palette')
    }
  }

  return (
    <ImageContext.Provider value={{ signIn, img }}>
      {children}
    </ImageContext.Provider>
  )
}
