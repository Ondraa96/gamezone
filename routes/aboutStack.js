import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60
                },
                headerTintColor: '#444',
                headerShown: false
            }}
        >
            <Stack.Screen
                name='About'
                component={About}
                options={{ title: 'About GameZone' }}
            />
        </Stack.Navigator>
    )
}