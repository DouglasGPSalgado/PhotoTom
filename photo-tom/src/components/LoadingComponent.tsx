import React from 'react'
import { View, Spinner } from 'native-base'

const LoadingComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner color="blue" />
    </View>
  )
}

export default LoadingComponent
