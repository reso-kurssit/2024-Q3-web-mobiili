import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { firestore, collection, LISTITEMS, query, onSnapshot, deleteDoc } from '../../firebase/Config';
import { doc } from "firebase/firestore";
import { MaterialIcons } from "@expo/vector-icons";

export default function GetItems ( ) {

  const [titles, setTitles] = useState([]);

  
  useEffect(() => {

    const itemQuery = query(collection(firestore, LISTITEMS));

    const unsubscribe = onSnapshot(itemQuery, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setTitles(items);
    }); 
    return () => {
        unsubscribe();
    }
    }, []);

    const deleteItem = async (id) => {
        try {
            await deleteDoc(doc(firestore, LISTITEMS, id));
        }
        catch (error) {
            console.error("Error deleting document: ", error);
        }
    }


  return (

        <ScrollView>
            { titles.map((item) => (
                <View style={styles.item} key={item.id}>
                    <Text style={styles.text}>{item.title}</Text>
                    <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
                        <MaterialIcons name="delete" style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

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
  item: {
    backgroundColor: "#e2e2e2",
    padding: 8,
    marginBottom: 10,
    marginHorizontal: 14,
    borderRadius: 8
  },
  deleteButton: {
    backgroundColor: "#be4742",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    position: "absolute",
    right: 16,
    top: 5,
  },
  iconStyle: {
    fontSize: 18,
    color: "#ffffff",
  },

});
