import { useContext } from 'react'

import { DataDeliveryContext } from '@contexts/DataDeliveryContext'

export function useDataDelivery() {
  const context = useContext(DataDeliveryContext)

  return context
}
