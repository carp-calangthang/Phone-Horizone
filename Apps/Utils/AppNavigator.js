import React, {useEffect, useState} from 'react';

import { createStackNavigator } from '@react-navigation/stack'; ;
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../Components/Home/HomeScreen';
import CartScreen from '../Components/Cart/CartScreen';
import Detail from '../Components/Products/Detail';

import LoginScreen from '../Components/Users/Login/LoginScreen';
import AddScreen from '../Components/Manager/add/AddScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Add"
                component={AddScreen}
                options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};