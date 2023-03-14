import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function ButtonCamera({ title, onPress, color, icon }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Entypo name={icon} size={28} color={color || 'white'} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: 'white',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
