import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#b3ffcc",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    elevation: 9,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
