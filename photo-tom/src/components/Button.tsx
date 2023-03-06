import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type ButtonProps = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      bg="white"
      borderWidth={0}
      height={14}
      rounded="full"
      _pressed={{
        bgColor: 'light.100',
      }}
      {...rest}
    >
      <Text fontSize="lg" color="blue.500">
        {title}
      </Text>
    </ButtonNativeBase>
  )
}
