import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      {...rest}
      w={"full"}
      h={65}
      bg={"white"}
      _pressed={{
        bgColor: "gray.100"
      }}
      borderRadius={25}
      borderWidth={2}
      borderColor={"#19C8FF"}
    >
      <Text fontSize={"xl"} color={"#19C8FF"}>
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
