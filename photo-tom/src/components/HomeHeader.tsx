import { MaterialIcons } from '@expo/vector-icons';
import { Heading, HStack, Icon, Text, VStack } from 'native-base';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import {useAuth} from '../contexts/auth';

export function HomeHeader() {
    const { signOut } = useAuth();

    return (
        <HStack bg="blue.400" pt={16} pb={5} px={8} alignItems="center">
            <VStack flex={1}>
                <Text color="white" fontSize="md">
                    Olá,
                </Text>
                <Heading color="white" fontSize="md" fontFamily="heading">
                    User Name
                </Heading>
            </VStack>
            <TouchableOpacity onPress={signOut}>
                <Icon as={MaterialIcons} name="logout" color="white" size={7} />
            </TouchableOpacity>
        </HStack>
    )
}