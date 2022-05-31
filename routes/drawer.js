import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="HomeDrawer" component={HomeStack} options={{ title: 'Home' }} />
            <Drawer.Screen name="AboutDrawer" component={AboutStack} options={{ title: 'About' }} />
        </Drawer.Navigator>
    );
}

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <RootDrawerNavigator />
        </NavigationContainer>
    )
}
