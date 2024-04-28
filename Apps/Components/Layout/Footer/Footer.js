
import React, { useState } from "react";
import { View, TouchableOpacity, } from "react-native";
const { useNavigation } = require("@react-navigation/native");
import { FooterStyleSheet as styles} from "./FooterStyles";
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

function FooterBar() {

    const navigation = useNavigation();

    const [selectedButton, setSelectedButton] = useState('home');

    const buttonColors = {
        home: 'gray',
        alert: 'gray',
        category: 'gray',
        user: 'gray',
    };

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const cleanToken = () => {
        AsyncStorage.removeItem('accessToken');
        navigation.navigate('Login');
    }


    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('home')}>
                <MaterialIcons name="home" size={24} color={selectedButton === 'home' ? '#F35C56' : buttonColors.home} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('alert')}>
                <MaterialCommunityIcons name="bell" size={24} color={selectedButton === 'alert' ? '#F35C56' : buttonColors.alert} />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Add')} 
                style={styles.button}>
                <AntDesign name="pluscircle" size={32} color="#F35C56" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Manager')}>
                <AntDesign name="appstore1" size={24} color={selectedButton === 'category' ? '#F35C56' : buttonColors.category} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => cleanToken()}>
                <FontAwesome name="user" size={24} color={selectedButton === 'user' ? '#F35C56' : buttonColors.user} />
            </TouchableOpacity>
        </View>
    )
};

export default FooterBar;

