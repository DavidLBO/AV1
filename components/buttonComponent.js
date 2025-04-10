import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default function buttonComponent({onPress, title}){
    return(
        <View style = {styles.inputRow}>
            <Text style = {styles.label}></Text>
            <View style = {{flex: 1}} >
                <Button title={title} onPress={onPress} />
            </View>
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
      },
})