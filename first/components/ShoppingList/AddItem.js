import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { firestore, addDoc, collection, LISTITEMS } from '../../firebase/Config';

export default function AddItem({ addItem }) {

  const [title, setTitle] = useState("");

  const handleSave = async () => {
    if (title.trim()) { 
      try {
        const docRef = await addDoc(collection(firestore, LISTITEMS), {
          title: title,
        });

        if (addItem) {
          addItem({ title });
        }
        
        setTitle("");

      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  }
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="[New item] Enter text..."
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
