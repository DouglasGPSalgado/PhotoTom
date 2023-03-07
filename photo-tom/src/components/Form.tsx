import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type FormProps = IButtonProps & {
  onPress: () => void
  text: string
}

export function Form({ onPress, text, ...rest }: FormProps) {
  return (
    <ButtonNativeBase
      onPress={onPress}
      mb={6}
      bg="white"
      borderWidth="blue.500"
      borderColor="green.500"
      shadow="7"
      _pressed={{
        bg: 'blue.500',
      }}
      rounded="sm"
      {...rest}
    >
      <Text color="blue.800"> {text} </Text>
    </ButtonNativeBase>
  )
}
