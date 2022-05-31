import React from 'react';
import { View, Text, Button } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route }) {
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <Text>{rating}</Text>
            </Card>
        </View>
    )
}