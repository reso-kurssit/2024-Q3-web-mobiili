import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import AddTodo from "./AddTodo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {

      const fetchTodos = async () => { 
        try {
          const savedTodos = await AsyncStorage.getItem("todos");
          if (savedTodos !== null) {
            setTodos(JSON.parse(savedTodos));
          }
        } catch (e) {
          console.log(e);
        }
      }

      fetchTodos();

    }, []);

    useEffect(() => {
        const saveTodos = async () => {
            try {
                await AsyncStorage.setItem("todos", JSON.stringify(todos));
            } catch (e) {
                console.log(e);
            }
        };

        saveTodos();
    }, [todos]);

    const addTask = (title) => {
        const newTask = {
            userId: 1,
            id: todos.length + 1,
            title: title,
            completed: false
        };
        setTodos(prevTodos => [...prevTodos, newTask]);
    };

    const toggleTask = (id) => {
      setTodos(prevTodos =>
          prevTodos.map(task =>
              task.id === id
                  ? { ...task, completed: !task.completed }
                  : task
          )
      );
  };

  const deleteTask = (id) => {
    setTodos(prevTodos => prevTodos.filter(task => task.id !== id));
  };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
            <AddTodo addTask={addTask} /> 
            <ScrollView>
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.item}>
                                <Text style={item.completed ? styles.completedText : styles.text}>{item.title}</Text>
                            </TouchableOpacity>
                            {item.completed && (
                                <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteTaskButton}>
                                    <MaterialIcons name="delete" size={24} color="red" /><Text>Delete row</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 2,
    },
    item: {
        backgroundColor: "#e2eddd",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 32,
    },
    text: {
        fontSize: 20,
    },
    completedText: {
        fontSize: 20,
        textDecorationLine: "line-through",
    },
    itemCompleted: {
        backgroundColor: "#c2edc1",
    },
    deleteTaskButton: {
      backgroundColor: "#f4dce2",
      padding: 12,
      borderRadius: 10,
      position: "absolute",
      right: 38,
      top: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },

});