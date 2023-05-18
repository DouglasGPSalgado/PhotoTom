import React, { useContext } from 'react'
import { Center, Text } from 'native-base'
import { AuthContext } from '@contexts/auth'

export default function TestID() {
  const { userId } = useContext(AuthContext)
  return (
    <Center>
      <Text color="#FBFBFB">PhotoTom v:1.0.{userId}.10</Text>
    </Center>
  )
}
