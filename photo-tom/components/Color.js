import { HStack } from "native-base";
import { React, useState } from "react";
import { View, Pressable, TouchableOpacity } from "react-native";

function Color(props, item, index) {

    const data = [
        {color:"#D3BCA0", id:1},
        {color:"#C7B297", id:2},
        {color:"#C2A281", id:3},
        {color:"#BBA78E", id:4},
        {color:"#B8997A", id:5},
        {color:"#AF8D70", id:6},
        {color:"#AD9073", id:7},
        {color:"#A68569", id:8},
        {color:"#9C7E63", id:9},
        {color:"#986B4A", id:10},
        {color:"#906546", id:11},
        {color:"#875F42", id:12},
        {color:"#845329", id:13},
        {color:"#7D4E27", id:14},
        {color:"#764A25", id:15},
        {color:"#46312B", id:16},
        {color:"#3D2824", id:17},
        {color:"#341F1C", id:18},
    ];

   const onClickItem = (item, index) => {
        const newArrData = data.map((e, index) => {
            if (item.id == e.id){
                return {
                    ...e,
                    selected:true
                }
            }
            return {
                ...e,
                selected: fase
            }
        })
    }

  return (
    <View>
      <HStack space={3} alignItems={"center"}>
        <TouchableOpacity
          style={{
            width: 75,
            height: 75,
            borderRadius: 100,
            marginVertical: 4,
            backgroundColor: props.color,
          }}
          onPress={() => onClickItem(item, index)}
        >
        </TouchableOpacity>
      </HStack>
    </View>
  );
}
export default Color;

