import { Center, Box, Progress } from 'native-base'

type FormProgressProps = {
  index: number
}

export default function FormProgress({ index }: FormProgressProps) {
  return (
    <>
      <Center w="100%" my="1">
        <Box w="60%" maxW="400">
          <Progress
            h="3"
            bg="coolGray.100"
            _filledTrack={{
              bg: 'brown.500',
            }}
            value={index}
            mx="4"
          />
        </Box>
      </Center>
    </>
  )
}
