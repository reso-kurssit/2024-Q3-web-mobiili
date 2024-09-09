import React, { useReducer } from "react";
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import AddTodo from "./AddTodo";
import { MaterialIcons } from "@expo/vector-icons";


const backgroundimage = [
    require('./background4.jpg'),
];

const initialState = [];

function reducer (state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, {id: state.length + 1, title: action.title, completed: false}];
        case "TOGGLE_TASK":
            return state.map(item => item.id === action.id ? {...item, completed: !item.completed} : item);
        case "REMOVE_TASK":
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default function TodoWithReducer() {

    const [todos, dispatch] = useReducer(reducer, initialState);

    const addTask = (title) => {
        dispatch({ type: "ADD_TASK", title });
    }

    const deleteTask = (id) => {
        dispatch({ type: "REMOVE_TASK", id });
    }

    const toggleTask = (id) => {
        dispatch({ type: "TOGGLE_TASK", id });
    }


    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={backgroundimage[0]}
                style={styles.backgroundImage}
            />
            <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
            <AddTodo addTask={addTask} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => dispatch({ type: "TOGGLE_TASK", id: item.id })} style={styles.item}>
                            <Text style={item.completed ? styles.completedText : styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                        {item.completed && (
                            <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteTaskButton}>
                                <MaterialIcons name="delete" size={24} style={styles.deleteTaskButtonText} /> 
                                <Text style={styles.deleteTaskButtonText}>Delete task</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            />
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
        backgroundColor: "#d2d2d2",
        padding: 8,
        marginHorizontal: 14,
        borderRadius: 8
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
        backgroundColor: "#be4742",
        padding: 6,
        borderRadius: 10,
        position: "absolute",
        right: 38,
        top: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteTaskButtonText: {
        color: "#ffffff",
        fontSize: 16,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    },

});