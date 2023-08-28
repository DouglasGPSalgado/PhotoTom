import { Button as ButtonNativeBase, IButtonProps, Center, Text } from 'native-base'
import { Platform } from 'react-native'

type FormButtonProps = IButtonProps & {
  onPress: () => void
  text: string
  textColor: string
}

export function FormButtonModal({
  onPress,
  text,
  textColor,
  ...rest
}: FormButtonProps) {
  return (
    <ButtonNativeBase
      onPress={onPress}
      my={2}
      p={0}
      bg="white"
      alignItems="center"
      justifyContent="center"
      shadow="5"
      borderColor="brown.300"
      _pressed={{
        bg: 'light.100',
      }}
      width="100%"
      height="10"
      rounded="2xl"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="12"
        fontFamily="body"
        textAlign="center"
      >
        {text}
      </Text>
    </ButtonNativeBase>
  )
}