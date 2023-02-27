import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function ButtonCamera({ title, onPress, color, icon }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Entypo name={icon} size={28} color={color ? color : "#003E52"} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          marginLeft: 10,
          color: "#f1f1f1",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
