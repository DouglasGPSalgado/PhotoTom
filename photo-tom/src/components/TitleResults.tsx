import { Text } from 'native-base';

type TitleResultsProps = {
    title: string
}

export function TitleResults({ title }: TitleResultsProps) {
    return (
        <>
            <Text color='blue.800' fontSize='3xl'>
                {title}
            </Text>
        </>
    )
} 