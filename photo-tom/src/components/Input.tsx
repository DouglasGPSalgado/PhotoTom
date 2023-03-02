import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

type Props = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl mb={5} isInvalid={invalid}>
      <NativeBaseInput
        placeholderTextColor={'#7F9EA8'}
        borderBottomWidth={2}
        borderBottomColor={'#003E52'}
        isInvalid={invalid}
        borderWidth={0}
        fontSize="md"
        _focus={{
          bg: 'gray.100',
        }}
        _invalid={{
          borderBottomColor: 'red.600',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}
