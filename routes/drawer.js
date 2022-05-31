import 'react-native-gesture-handler';
import React from 'react';
import { HeaderBackground, StyleSheet, BlurView, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routeName) {
        case 'Home':
            return 'GameZone';
        case 'ReviewDetails':
            return 'Review details';
        case 'About':
            return 'About GameZone';
    }
}

function RootDrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60
                },
                headerTintColor: '#444',
                headerBackground: () => (
                    <ImageBackground source={require('../assets/game_bg.png')} style={StyleSheet.absoluteFill} />
                ),
            }}
        >
            <Drawer.Screen
                name="HomeDrawer"
                component={HomeStack}
                options={({ route }) => ({
                    title: 'Home',
                    headerTitle: getHeaderTitle(route),
                    headerShown: getHeaderTitle(route) === 'Review details' ? false : true,
                })}
            />
            <Drawer.Screen
                name="AboutDrawer"
                component={AboutStack}
                options={{
                    title: 'About',
                    headerTitle: 'About GameZone'
                }}
            />
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
