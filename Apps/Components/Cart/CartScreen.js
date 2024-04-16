import React, { useState, useEffect } from "react";
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, ScrollView, SafeAreaView, View, TouchableOpacity, Image, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox } from "react-native-elements";
import Axios from "../../Api/Axios";
import { cartStylesheet as styles } from "./CartStyle";

export default function CartScreen() {
    const navigation = useNavigation();
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const loadCart = async () => {
            try {
                const token = await AsyncStorage.getItem('accessToken');
                const response = await Axios.get('/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const cartData = response.data.cart;
                setItems(cartData.items);
                setTotalPrice(cartData.totalPrice);
            } catch (error) {
                console.log(error);
            }
        }
        loadCart();
    }, []);

    const ConfirmDelete = async (productid) => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to delete this item from your cart?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => DeleteItem(productid)
                }
            ]
        );
    };

    const DeleteItem = async (productid) => { // Sửa hàm DeleteItem để nhận vào productid
        try {
            console.log(productid); // In ra console để kiểm tra productid của sản phẩm cần xoá
            const token = await AsyncStorage.getItem('accessToken');
            const response = await Axios.delete('/cart/remove', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: { 
                    productid
                }
            });
            console.log(response.data.message);
            if (response.data.ping === '1') {
                const updatedItems = items.filter(item => item.product !== productid);
                const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
                setItems(updatedItems);
                setTotalPrice(updatedTotalPrice);
            }
        } catch (error) {
            console.log(error);
        }
    };
    

    const [checked, setChecked] = useState(false);
    const toggleCheckBox = () => {
        setChecked(!checked);
    };

    const handleQuantityChange = (quantity, index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity = quantity;
        const updatedTotalPrice = updatedItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
        setItems(updatedItems);
        setTotalPrice(updatedTotalPrice);
    };

    const addQuantity = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity++;
        const updatedTotalPrice = totalPrice + updatedItems[index].productPrice;
        setItems(updatedItems);
        setTotalPrice(updatedTotalPrice);
    };

    const removeQuantity = (index) => {
        const updatedItems = [...items];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity--;
            const updatedTotalPrice = totalPrice - updatedItems[index].productPrice;
            setItems(updatedItems);
            setTotalPrice(updatedTotalPrice);
        }
    };

    // Function to render product elements
    const renderProducts = () => {
        return items.map((item, index) => (
            <View style={styles.product_base} key={index}>

                <TouchableOpacity onPress={() => ConfirmDelete(item.product)} style={styles.delete}>
                    <Ionicons name="trash-bin" size={24} color="black" />
                </TouchableOpacity>       
                
                <TouchableOpacity>
                    <Image
                        style={styles.product_image}
                        source={{ uri: item.productImage[0] }}
                    />
                </TouchableOpacity>
                <View style={styles.product_items}>
                    <TouchableOpacity>
                        <Text style={styles.product_name}>{item.productName}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.product_description}>hi</Text>
                    </TouchableOpacity>
                    <View style={styles.product_price_base}>
                        <Text style={styles.product_price}>{item.productPrice * item.quantity}₫</Text>
                        
                    </View>
                    <View style={styles.product_count}>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => addQuantity(index)}
                            >
                                <AntDesign name="plus" size={18} color="black" />
                            </TouchableOpacity>
                            <TextInput
                                style={styles.quantity}
                                value={item.quantity.toString()}
                                onChangeText={(text) => handleQuantityChange(parseInt(text), index)}
                            />
                            <TouchableOpacity
                                onPress={() => removeQuantity(index)}
                                style={styles.removeButton}
                            >
                                <AntDesign name="minus" size={18} color="black" />
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="home" size={32} color="black" />
                </TouchableOpacity>
                <View style={styles.search_base}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={'#fff'}
                        style={styles.search_bar}
                    />
                    <TouchableOpacity style={styles.search_button}>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={console.log("Cart")}>
                    <Image
                        style={styles.image}
                        source={require("../../../public/images/product/iphone14.png")}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.main}
            >
                {renderProducts()}
            </ScrollView>
            <View style={styles.checkout}>
                <CheckBox
                    checked={checked}
                    onPress={toggleCheckBox}
                    style={styles.checkbox}
                />
                <Text style={styles.checkout_text}>All</Text>
                <Text style={styles.total_text}>Total: {totalPrice}₫</Text>
                <TouchableOpacity style={styles.checkout_button}>
                    <MaterialIcons style={styles.checkout_icon} name="shopping-cart-checkout" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
