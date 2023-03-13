import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type ButtonProps = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      bg="white"
      borderWidth={0}
      h={14}
      rounded="full"
      shadow={5}
      _pressed={{
        bgColor: 'light.100',
      }}
      {...rest}
    >
      <Text fontSize="lg" color="brown.300">
        {title}
      </Text>
    </ButtonNativeBase>
  )
}
