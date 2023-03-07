import { SkinsToneDTO } from '@dtos/PaletteDTO'
import { createContext, ReactNode, useState } from 'react'

type DataDeliveryContextProps = {
  selectedSkinsTone: number
  handleSkinsTone: (value: number) => void
}

type ContextProviderProps = {
  children: ReactNode
}

export const DataDeliveryContext = createContext<DataDeliveryContextProps>(
  {} as DataDeliveryContextProps,
)

export function DataDeliveryProvider({ children }: ContextProviderProps) {
  const [selectedSkinsTone, setSelectedSkinsTone] = useState(0)

  function handleSkinsTone(value: number) {
    setSelectedSkinsTone(value)
  }

  return (
    <DataDeliveryContext.Provider
      value={{ selectedSkinsTone, handleSkinsTone }}
    >
      {children}
    </DataDeliveryContext.Provider>
  )
}
