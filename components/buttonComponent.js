import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonComponent({ onPress, title }) {
    return (
        <View style={styles.inputArea}>
            <TouchableOpacity 
                style={styles.customButton}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputArea: {
        marginTop: '3%',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: '75%',
        marginBottom: '3%',
    },
    customButton: {
        flex: 1,
        backgroundColor: '#DDE8FA',
        borderColor: '#A6B9D9',
        borderWidth: 2,
        borderRadius: 2,
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 24,
    }
});