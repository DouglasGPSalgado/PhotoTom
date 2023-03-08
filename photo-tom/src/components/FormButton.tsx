import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

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
      mb={6}
      bg="white"
      shadow="5"
      borderColor="blue.300"
      _pressed={{
        bg: 'light.100',
      }}
      height={16}
      rounded="2xl"
      {...rest}
    >
      <Text color={textColor} fontSize="md" fontFamily="body">
        {text}
      </Text>
    </ButtonNativeBase>
  )
}
