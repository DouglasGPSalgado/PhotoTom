import { useState } from 'react'
import { View, Spinner, Modal, VStack, Text } from 'native-base'

const LoadingComponent = () => {
  const [visible, setVisible] = useState(true)
  return (
    <Modal
      isOpen={visible}
      onClose={setVisible}
      size="full"
      background="white"
    >
      <VStack>
        <Spinner
          color="brown.400"
          size="lg"
        />
        <Text
          fontSize="lg"
          color="brown.400"
        >
          Carregando
        </Text>
      </VStack>
    </Modal>
  )
}

export default LoadingComponent
