import { Button as ButtonNativeBase, IButtonProps, Center, Text } from 'native-base'
import { Platform } from 'react-native'

type FormButtonProps = IButtonProps & {
  onPress: () => void
  text: string
  textColor: string
}

export function FormButton({
  onPress,
  text,
  textColor,
  ...rest
}: FormButtonProps) {
  return (
    <ButtonNativeBase
      onPress={onPress}
      my={3}
      bg="white"
      shadow="5"
      borderColor="brown.300"
      _pressed={{
        bg: 'light.100',
      }}
      width="100%"
      height="14"
      rounded="2xl"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize={Platform.OS === 'ios' ? 'md' : 'sm'}
        fontFamily="body"
      >
        {text}
      </Text>
    </ButtonNativeBase>
  )
}
