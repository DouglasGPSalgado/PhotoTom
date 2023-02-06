import { React } from "react";
import { View } from "react-native";
import {
    NativeBaseProvider,
    Box,
    Text
} from "native-base";

export default function Form({ navigation }) {
    return (
        <NativeBaseProvider>
            <Box>
                <Text>JP Corno</Text>
            </Box>
        </NativeBaseProvider>
    );
};