import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '@services/api'
import { createContext, ReactNode, useState } from 'react'
import { useImg } from './img'

type DataDeliveryContextProps = {
  skinColor: number | null
  setSkinColor: (value: number) => void
  hairColor: number | null
  setHairColor: (value: number) => void
  eyeColor: number | null
  setEyeColor: (value: number) => void
  amountFreckles: number | null
  setAmountFreckles: (value: number) => void
  tannedSkin: number | null
  setTannedSkin: (value: number) => void
  bronzeIntensity: number | null
  setBronzeIntensity: (value: number) => void
  sunReaction: number | null
  setSunReaction: (value: number) => void
  facialSunSensitivity: number | null
  setFacialSunSensitivity: (value: number) => void
  initialGuess: number
  setInitialGuess: (value: number) => void
  results: number[][]
  setResults: (value: number[][]) => void
  palette: number
  setPalette: (value: number) => void
  postResults: () => Promise<void>
}

type ContextProviderProps = {
  children: ReactNode
}

export const DataDeliveryContext = createContext<DataDeliveryContextProps>(
  {} as DataDeliveryContextProps,
)

export function DataDeliveryProvider({ children }: ContextProviderProps) {
  const { img } = useImg()
  const [skinColor, setSkinColor] = useState<number | null>(null)
  const [hairColor, setHairColor] = useState<number | null>(null)
  const [eyeColor, setEyeColor] = useState<number | null>(null)
  const [amountFreckles, setAmountFreckles] = useState<number | null>(null)
  const [tannedSkin, setTannedSkin] = useState<number | null>(null)
  const [bronzeIntensity, setBronzeIntensity] = useState<number | null>(null)
  const [sunReaction, setSunReaction] = useState<number | null>(null)
  const [facialSunSensitivity, setFacialSunSensitivity] = useState<
    number | null
  >(null)
  const [initialGuess, setInitialGuess] = useState<number>(1)
  const [palette, setPalette] = useState<number>(1)

  const [results, setResults] = useState<number[][]>([[]])

  async function postResults() {
    try {
      const token = await AsyncStorage.getItem('@PTAuth:token')
      const response = await api.post(
        'analysis/',
        {
          initial_guess: palette,
          tech_guess: initialGuess,
          sample: img,
          skin_c: skinColor,
          hair_c: hairColor,
          eye_c: eyeColor,
          freckles: amountFreckles,
          tan_rate: tannedSkin,
          tan_intensity: bronzeIntensity,
          exp_reaction: sunReaction,
          facial_exp_sensibility: facialSunSensitivity,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Token ${token}`,
          },
        },
      )
      setResults(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DataDeliveryContext.Provider
      value={{
        setSkinColor,
        skinColor,
        hairColor,
        setHairColor,
        eyeColor,
        setEyeColor,
        amountFreckles,
        setAmountFreckles,
        tannedSkin,
        setTannedSkin,
        bronzeIntensity,
        setBronzeIntensity,
        sunReaction,
        setSunReaction,
        facialSunSensitivity,
        setFacialSunSensitivity,
        palette,
        setPalette,
        postResults,
        initialGuess,
        setInitialGuess,
        results,
        setResults,
      }}
    >
      {children}
    </DataDeliveryContext.Provider>
  )
}
