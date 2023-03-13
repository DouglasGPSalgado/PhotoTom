import React, { useContext } from 'react'
import { HStack, Spinner } from 'native-base'

import { useAuth } from '../contexts/auth'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { DataDeliveryContext } from '@contexts/DataDeliveryContext'

const Routes: React.FC = () => {
  const { signed, loading } = useAuth()
  const contextData = useContext(DataDeliveryContext)

  console.log(contextData)

  if (loading) {
    return (
      <HStack flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" color="blue.500" />
      </HStack>
    )
  }

  return signed ? <AuthRoutes /> : <AppRoutes />
}

export default Routes
