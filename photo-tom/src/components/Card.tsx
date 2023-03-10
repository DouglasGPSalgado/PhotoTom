import { MaterialIcons } from '@expo/vector-icons'
import { Box, Center, Heading, ICardProps, Icon, Text } from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

type Props = ICardProps & {
  title: string
  subtitle: string
  description: string
  action: string
  onPress: () => void
}

export default function Card({
  title,
  subtitle,
  description,
  action,
  onPress,
  ...rest
}: Props) {
  const [details, setDetails] = useState(false)

  return (
    <Box
      width="full"
      padding="4"
      bg="white"
      borderRadius="8"
      shadow="6"
      flexDirection="row"
      {...rest}
    >
      <Center flex={1}>
        <Heading
          fontFamily="heading"
          fontSize="lg"
          textAlign="center"
          width={40}
          color="brown.500"
        >
          {title}
        </Heading>

        <Text fontSize="xs" mt="0.5" color="brown.500">
          {subtitle}
        </Text>

        {details && (
          <Text
            mt={5}
            textAlign="center"
            fontSize="md"
            fontWeight="medium"
            color="brown.500"
            opacity="0.7"
          >
            {description}
          </Text>
        )}

        <TouchableOpacity onPress={onPress}>
          <Text mt={5} fontSize="22" color="brown.300">
            {action}
          </Text>
        </TouchableOpacity>
      </Center>

      <Box position="absolute" right="0" top="0" padding={4}>
        <TouchableOpacity
          onPress={() => setDetails((prevDetails) => !prevDetails)}
        >
          <Icon as={MaterialIcons} name="help" color="brown.500" size={7} />
        </TouchableOpacity>
      </Box>
    </Box>
  )
}
