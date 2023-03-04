import React from 'react'
import { HStack, Spinner } from 'native-base'

import { useAuth } from '../contexts/auth'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const { signed, loading } = useAuth()

  if (loading) {
    return (
      <HStack flex={1} justifyContent={'center'} alignItems={'center'}>
        <Spinner size={'lg'} color={'blue.500'} />
      </HStack>
    )
  }

  return <AppRoutes />
}

export default Routes
