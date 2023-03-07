import { SkinsToneDTO } from '@dtos/PaletteDTO'
import { Box } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type SkinsToneProps = TouchableOpacityProps & {
  item: SkinsToneDTO
  onPress: () => void
}

export function SkinsTonePalette({ item, onPress, ...rest }: SkinsToneProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        width={20}
        height={20}
        rounded="full"
        bg={item.color}
        my={1}
        {...rest}
      />
    </TouchableOpacity>
  )
}
