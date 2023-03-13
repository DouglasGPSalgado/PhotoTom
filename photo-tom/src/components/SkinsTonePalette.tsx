import { SkinsToneDTO } from '@dtos/PaletteDTO'
import { useDataDelivery } from '@hooks/useDataDelivery'
import { Box, IBoxProps } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type SkinsToneProps = IBoxProps & {
  item: SkinsToneDTO
  onPress: () => void
}

export function SkinsTonePalette({ item, onPress, ...rest }: SkinsToneProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box rounded="full" bg={item.color} my={1} {...rest} />
    </TouchableOpacity>
  )
}
