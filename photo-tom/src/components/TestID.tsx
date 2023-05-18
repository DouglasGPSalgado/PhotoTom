import React from 'react'
import { Center, Text } from 'native-base'
import { useAuth } from '@contexts/auth'

export default function TestID() {
  const { userId } = useAuth()
  return (
    <Center>
      <Text color="#FBFBFB">PhotoTom v:1.0.{userId}.10</Text>
    </Center>
  )
}
