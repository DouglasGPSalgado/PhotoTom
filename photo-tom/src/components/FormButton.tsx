import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'
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
      p={0}
      px={0.5}
      bg="white"
      shadow="5"
      borderColor="brown.300"
      _pressed={{
        bg: 'light.100',
      }}
      width="100%"
      height="14"
      rounded="2xl"
      justifyContent="center"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="14"
        //Não mudar pois os valores estavam em conflito em determinadas tela!!!!!
        fontFamily="body"
        textAlign="center"
      >
        {text}
      </Text>
    </ButtonNativeBase>
  )
}
