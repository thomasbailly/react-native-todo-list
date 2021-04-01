import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  const data = props;
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.initialParams.d.label}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    height: 40,
    //   ...
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    height: 24,
    width: 24,
    marginLeft: 10,
    backgroundColor: "#2F69FF",
    borderRadius: 5,
  },
  itemText: {
    maxWidth: "80%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    color: "#1A1A1A",
    marginLeft: 10,
    top: 170,
  },
  circular: {
    width: 12,
    height: 12,
    alignItems: "center",
    borderColor: "#2F69FF",
    borderWidth: 2,
    borderRadius: 5,
    position: "absolute",
    right: 10,
  },
});

export default Task;
