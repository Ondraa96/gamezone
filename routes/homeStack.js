import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {


    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60
                },
                headerTintColor: '#444',
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'GameZone',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='ReviewDetails'
                component={ReviewDetails}
                options={{ title: 'Review details' }}
            />
        </Stack.Navigator>
    )
}