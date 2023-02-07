import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientText(props) {
  return (
    <MaskedView
      maskElement={
        <Text style={[props.style, { backgroundColor: "transparent" }]}>
          {props.text}
        </Text>
      }
    >
      <LinearGradient
        colors={["#003E52", "#001B24"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={[props.style, { opacity: 0 }]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
