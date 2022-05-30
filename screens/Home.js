import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    text: {
        fontFamily: 'nunito-bold'
    }
})