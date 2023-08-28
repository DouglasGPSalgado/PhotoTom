import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '@services/api'
import { createContext, ReactNode, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import LoadingComponent from '@components/LoadingComponent'

type paletteDTO = {
  image: string | undefined
}

export type DataDeliveryContextProps = {
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
  initialGuess: number | null
  setInitialGuess: (value: number) => void
  techRating: number
  setTechRating: (value: number) => void
  results: number[][]
  setResults: (value: number[][]) => void
  palette: number
  setPalette: (value: number) => void
  postResults: () => Promise<void>
  putResults: () => Promise<void>
  img: paletteDTO
  signIn: (image: string) => Promise<void>
}

type ContextProviderProps = {
  children: ReactNode
}

export const DataDeliveryContext = createContext<DataDeliveryContextProps>(
  {} as DataDeliveryContextProps,
)

export function DataDeliveryProvider({ children }: ContextProviderProps) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  const [img, setImg] = useState<paletteDTO>({} as paletteDTO)
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
  const [initialGuess, setInitialGuess] = useState<number | null>(null)
  const [techRating, setTechRating] = useState<number>(0)
  const [palette, setPalette] = useState<number>(0)
  const [analysis_Id, setAnalysis_Id] = useState<number>(0)
  const [results, setResults] = useState<number[][]>([[]])
  const [isLoading, setIsLoading] = useState(false)

  async function signIn(image: string) {
    if (image !== null) {
      setImg({
        image,
      })

      navigate('Palette')
    }
  }

  async function postResults() {
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    const localUri = img.image.uri
    const filename = localUri.split('/').pop()
    // Infer the type of the image
    const match = /.(\w+)$/.exec(filename)
    const type = match ? `image/${match[1]}` : `image`
    // Upload the image using the fetch and FormData APIs
    const formData = new FormData()
    // Assume "photo" is the name of the form field the server expects
    formData.append('sample', {
      uri: localUri,
      name: filename,
      type,
    })
    formData.append('initial_guess', palette)
    formData.append('tech_guess', initialGuess)
    formData.append('skin_c', skinColor)
    formData.append('hair_c', hairColor)
    formData.append('eye_c', eyeColor)
    formData.append('freckles', amountFreckles)
    formData.append('tan_rate', tannedSkin)
    formData.append('tan_intensity', bronzeIntensity)
    formData.append('exp_reaction', sunReaction)
    formData.append('facial_exp_sensibility', facialSunSensitivity)

    try {
      setIsLoading(true)
      const token = await AsyncStorage.getItem('@PTAuth:token')
      const response = await api.postForm('analysis/', formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      setResults(response.data.results)
      setInitialGuess(null)
      setAmountFreckles(null)
      setBronzeIntensity(null)
      setEyeColor(null)
      setFacialSunSensitivity(null)
      setHairColor(null)
      setSkinColor(null)
      setSunReaction(null)
      setTannedSkin(null)
      setAnalysis_Id(response.data.id)
      setIsLoading(false)
      navigate('results')
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function putResults() {
    try {
      setIsLoading(true)
      const token = await AsyncStorage.getItem('@PTAuth:token')
      await api.put(
        `analysis/${analysis_Id}/`,
        {
          tech_rating: techRating,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      )
      setIsLoading(false)
      navigate('home')
    } catch (error) {
      setIsLoading(false)
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
        putResults,
        initialGuess,
        setInitialGuess,
        results,
        setResults,
        techRating,
        setTechRating,
        img,
        signIn,
      }}
    >
      {isLoading ? <LoadingComponent /> : children}
    </DataDeliveryContext.Provider>
  )
}
