import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails screen</Text>
            <Button title='Go back' onPress={() => navigation.goBack()} />
        </View>
    )
}