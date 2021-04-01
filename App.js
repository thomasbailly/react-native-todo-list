import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
const data = [
  {
    id: 1,
    thumbnail: "",
    label: "🏋 Work out 30 minutes",
    isCompleted: false,
  },
  {
    id: 2,
    thumbnail: "",
    label: "🏫 Ace the react native test",
    isCompleted: false,
  },
  {
    id: 3,
    thumbnail: "",
    label: " 🍸 Chill out",
    isCompleted: false,
  },
];

export default function App() {
  const [TASKS, setTASKS] = useState(data);
  const [newTask, setNewTask] = useState("");
  return (
    <View style={styles.container} key="">
      {/* Todo today section */}
      <View style={styles.tasksSection}>
        <Text style={styles.Titre}>Todo today</Text>
        {TASKS.map((d) => {
          return <Task initialParams={{ d }}></Task>;
        })}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
          borderRadius: 10,
        }}
      >
        <KeyboardAvoidingView style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(newTask) => {
              this.setNewTask(newTask);
            }}
            value={newTask}
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              textAlign: "center",
            }}
            placeholder="Add a task"
          ></TextInput>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 100,
              width: 100,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Titre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
