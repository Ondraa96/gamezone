import React, { useState } from 'react';
import {
    StyleSheet, View, Text, FlatList, TouchableOpacity,
    Modal, SafeAreaView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Moc krasny', body: 'popisek', rating: 5, id: 1 },
        { title: 'Slo to', body: 'popisek', rating: 3, id: 2 },
        { title: 'Dobryyy', body: 'popisek', rating: 4, id: 3 },
        { title: 'Nic moc', body: 'popisek', rating: 1, id: 4 },
    ])

    const addReview = (review) => {
        review.id = Math.random().toString();
        setReviews(prevState => {
            return [review, ...prevState];
        })
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal animationType='slide' visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SafeAreaView style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalOpen(false)}>
                            <MaterialIcons
                                name='close'
                                size={24}
                                suppressHighlighting
                                style={{ ...styles.modalToggle, ...styles.modalClose }}
                            />
                        </TouchableOpacity>
                        <ReviewForm addReview={addReview} />
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </Modal>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
                <MaterialIcons
                    name='add'
                    size={24}
                    style={styles.modalToggle}
                />
            </TouchableOpacity>
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

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
})