import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Child from "./child/index";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  state = {
    text: "zs",
  };

    componentWillMount() {
      console.log();
      
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello worlddddd1231!</Text>
        <Child text={this.state.text}>
          <p>1234567</p>{" "}
        </Child>
        <Button
          onClick={() => {
            Taro.navigateTo({
                url: "pages/index/home/index?id=12312312",

            });
          }}
        >goback</Button>
      </View>
    );
  }
}
