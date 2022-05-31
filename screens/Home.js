import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Moc krasny', body: 'popisek', rating: 5, id: 1 },
        { title: 'Slo to', body: 'popisek', rating: 3, id: 2 },
        { title: 'Dobryyy', body: 'popisek', rating: 4, id: 3 },
        { title: 'Nic moc', body: 'popisek', rating: 1, id: 4 },
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}