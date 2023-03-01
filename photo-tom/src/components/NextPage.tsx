import { TouchableOpacity } from "react-native";
import { ITextProps, Text } from "native-base";

type NextPageProps = ITextProps & {
    action: string
    onPress: () => void
}

export function NextPage({ action, onPress, ...rest }: NextPageProps) {
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <Text fontSize='3xl' color="" {...rest}>
                    {action}
                </Text>
            </TouchableOpacity>
        </>
    )
}