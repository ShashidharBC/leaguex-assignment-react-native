import React from "react";
import { View } from "react-native";
import { FloatingAction } from "react-native-floating-action";

export const FloatingActionComp = () => {
  const actions = [];
  return (
    <View>
      <FloatingAction actions={actions} color={"#4CB9E7"} buttonSize={40} />
    </View>
  );
};

FloatingActionComp.defaultProps = {};
