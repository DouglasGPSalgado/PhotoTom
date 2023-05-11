import { React, useState, useContext } from "react";
import { Box, Center, ITextProps, Text } from "native-base";
import { AuthContext } from '@contexts/auth'

export default function TestID() {
    const { userId, setUserId } = useContext(AuthContext)
    return (
        <Center>
            <Text
                margin="1"
                color="#FBFBFB"
            >
                PhotoTom v:1.0.{userId}.10
            </Text>
        </Center>
    )
};