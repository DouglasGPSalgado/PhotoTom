import { MaterialIcons } from '@expo/vector-icons'
import { Heading, HStack, Icon, Text, VStack } from 'native-base'
import { useContext } from 'react'
import { TouchableOpacity } from 'react-native'

import { useAuth } from '../contexts/auth'

export function HomeHeader() {
  const { signOut, user } = useAuth()

  const userEmail = user?.email.split('@')[0]
  const userName = `${userEmail?.charAt(0).toUpperCase()}${userEmail?.slice(1)}`

  return (
    <HStack bg="brown.300" pt={16} pb={5} px={8} alignItems="center">
      <VStack flex={1}>
        <Text color="white" fontSize="md">
          Olá,
        </Text>
        <Text color="white" fontSize="md">
          {userName}
        </Text>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color="white" size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
