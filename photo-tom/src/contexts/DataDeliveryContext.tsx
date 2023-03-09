import { createContext, ReactNode, useState } from 'react'

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
  handleSkinsTone: (value: number | null) => void
}

type ContextProviderProps = {
  children: ReactNode
}

export const DataDeliveryContext = createContext<DataDeliveryContextProps>(
  {} as DataDeliveryContextProps,
)

export function DataDeliveryProvider({ children }: ContextProviderProps) {
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
  const [palette, setPalette] = useState<number | null>(null)

  function handleSkinsTone(value: number | null) {
    setPalette(value)
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
        handleSkinsTone,
      }}
    >
      {children}
    </DataDeliveryContext.Provider>
  )
}
