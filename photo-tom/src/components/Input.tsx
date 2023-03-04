import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

type InputProps = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        borderWidth="none"
        bg="white"
        h={14}
        fontSize="md"
        color="black"
        fontFamily="body"
        shadow={2}
        rounded="md"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        placeholderTextColor="gray.300"
        _focus={{
          bg: 'white',
          borderWidth: 1,
          borderColor: 'green.500',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}
