import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function InputField({ label, value, onChangeText}){
    return(
        <View style={styles.inputRow}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.inputText} value={value} onChangeText={onChangeText} />
      </View>
    );
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      label: {
        width: '25%',
        fontSize: 16,
        fontWeight: 'bold',
      },
      inputText: {
        flex: 2,
        borderColor: 'black',
        borderWidth: 1,
        padding: 8,
      },
})