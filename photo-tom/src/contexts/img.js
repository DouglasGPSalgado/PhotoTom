import { useNavigation } from "@react-navigation/native";
import React, { createContext, useState } from "react";

export const ImageContext = createContext({});

export default function ImageProvider({ children }) {
  const [img, setImg] = useState({});
  const navigation = useNavigation();

  function signIn(image) {
    if (image !== null) {
      setImg({
        image: image,
      });
      console.log(img);
      navigation.navigate("Palette")
    }
  }

  return (
    <ImageContext.Provider value={{ signIn, img }}>
      {children}
    </ImageContext.Provider>
  );
}
