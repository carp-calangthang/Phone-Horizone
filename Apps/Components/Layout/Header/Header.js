
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { HeaderStyleSheet as styles} from "./HeaderStyles";

function HeaderBar() {

    const navigation = useNavigation();

    const [selectedButton, setSelectedButton] = useState('');

    const buttonColors = {
        cart: '#272459'
    };

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                />
                <TouchableOpacity style={styles.searchButton}>
                    <AntDesign name="search1" size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.cartButton} 
                onPress={() => navigation.navigate("Cart")}>
                <MaterialIcons name="shopping-cart" size={24} color={selectedButton === 'cart' ? '#F35C56' : buttonColors.cart} />
            </TouchableOpacity>
        </View>
    )
};

export default HeaderBar;

