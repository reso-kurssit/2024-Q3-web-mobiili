import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

export default function AddTodo({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (title.trim()) { 
      addTask(title); 
      setTitle(""); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="[New task] Enter title..."
      />
      <Button title="ADD" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 14,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  },
  input: {
    marginBottom: 10,
    marginTop: 20,
    marginRight: 20,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    flex: 1,
  },

});
