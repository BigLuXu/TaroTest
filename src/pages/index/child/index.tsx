import { View } from "@tarojs/components";
import { FC } from "react";

type childType = {
  text?: string;
  children: React.ReactNode;
};

const Child: FC<childType> = ({ children, text }) => {
  return (
    <>
      <View>{children}</View>

      <p>{text}</p>
    </>
  );
};

export default Child;
