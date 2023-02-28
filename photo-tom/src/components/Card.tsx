import { MaterialIcons } from '@expo/vector-icons';
import { Box, Center, Heading, ICardProps, Icon, Text } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

type Props = ICardProps & {
  title: string
  subtitle: string
  description: string
  action: string
  onPress: () => void
}

export default function Card({ title, subtitle, description, action, onPress }: Props) {
  const [details, setDetails] = useState(false);

  return (
    <Box
      width='full'
      mt={4}
      padding="4"
      bg="white"
      borderRadius="8"
      shadow='6'
      flexDirection='row'
    >
      <Center flexDirection='column' flex={1}>
        <Heading fontFamily='heading' fontSize='lg'>
          {title}
        </Heading>

        <Heading fontSize='xs' mt='0.5' color='blue.800'>
          {subtitle}
        </Heading>

        {details && (
          <Text
            mt={5}
            textAlign="center"
            fontSize="md"
            fontWeight="medium"
            color="blue.800"
            opacity='0.7'
          >
            {description}
          </Text>
        )}

        <TouchableOpacity onPress={onPress}>
          <Text mt={5} fontSize="22" color="#19C8FF">
            {action}
          </Text>
        </TouchableOpacity>
      </Center>

      <Box position='absolute' right='0' top='0' padding={4}>
        <TouchableOpacity onPress={() => setDetails(prevDetails => !prevDetails)}>
          <Icon as={MaterialIcons} name="help" color="blue.800" size={7} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
}