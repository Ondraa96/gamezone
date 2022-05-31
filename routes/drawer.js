import 'react-native-gesture-handler';
import React from 'react';
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
        <Drawer.Navigator>
            <Drawer.Screen
                name="HomeDrawer"
                component={HomeStack}
                options={({ route }) => ({
                    title: 'Home',
                    headerTitle: getHeaderTitle(route),
                })}
            />
            <Drawer.Screen
                name="AboutDrawer"
                component={AboutStack}
                options={({ route }) => ({
                    title: 'About',
                    headerTitle: getHeaderTitle(route)
                })}
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
