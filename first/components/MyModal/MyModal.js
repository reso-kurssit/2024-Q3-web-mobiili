import React from "react";
import { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default function MyModal() {
    const [modalVisible, setModalVisible] = useState(false);
    const [boxVisible, setBoxVisible] = useState(true);

    const handleOpenModal = () => {
        setModalVisible(true);
        setBoxVisible(false);
    }

    const handleCloseModal = () => {
        setModalVisible(false);
        setBoxVisible(true);
    }

    return (
        <View style={styles.centeredView}>

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.centeredScreen}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>This is modal...</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
                
            </Modal>

            {boxVisible && (
                <Pressable visible={boxVisible} onPress={handleOpenModal}>
                    <Text style={styles.modalText}>Show modal message</Text>
                </Pressable>
            )}

        </View>
    );
}

const styles = StyleSheet.create({

    centeredScreen: {
        padding: 15,
        marginTop: 80,
        width: '75%',
        position: 'absolute',
        top: '25%',
        left: '12.5%',
    },
    centeredView: {
        marginTop: 50,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 8,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});


