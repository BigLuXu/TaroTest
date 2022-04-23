import { Button, View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { FC, useState } from "react";

const Home: FC = () => {
  const [msg, setMsg] = useState({ msg: "hello Home" });

  const res = useRouter();
  console.log(res);

  return (
    <>
      <View>
        <View>{msg.msg}</View>
        <p>123123123</p>
        <Button
          onClick={() => {
            setMsg({ msg: "你好" });
            Taro.navigateTo({
              url: "pages/index/index?id=1",
            });
          }}
        >
          jump
        </Button>
      </View>
    </>
  );
};

export default Home;
