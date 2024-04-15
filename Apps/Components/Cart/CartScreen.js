import React, { useState, useEffect } from "react";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity, Image, TextInput } from "react-native";

import { cartStylesheet as styles } from "./CartStyle";
import { CheckBox } from "react-native-elements";

export default function CartScreen(){

    const navigation = useNavigation();

    // set initial state of checkbox
    const [checked, setChecked] = useState(false);
    const toggleCheckBox = () => {
        setChecked(!checked);
    };

    // set initial state of quantity
    const [quantity, setQuantity] = useState(1);

    const [price, setPrice] = useState(15);

    // update state of quantity
    // update the quantity of the product when the user press the add or remove button
    const handleQuantityChange = quantity => {
        setQuantity(quantity);
    };

    // update the price of the product when the user press the add or remove button
    const handelPriceChange = price => {
        setPrice(price);
    };
    
    const addQuantity = () => {
        setQuantity(quantity + 1);
        setPrice(price + 15);
    };
    const removeQuantity = () => {
        setQuantity(quantity - 1);
        setPrice(price - 15);
    };

    return (
        <SafeAreaView style={ styles.container }>

            <View style={styles.header}>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <AntDesign name="home" size={32} color="black" />
                </TouchableOpacity>
                <View style={ styles.search_base }>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={'#fff'}
                        style={ styles.search_bar }
                    />
                    <TouchableOpacity style={ styles.search_button }>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>         
                </View>
                <TouchableOpacity
                    onPress={console.log("Cart")}
                >
                    <Image 
                        style={styles.image} 
                        source={require("../../../public/images/product/iphone14.png")}
                    />
                </TouchableOpacity>           
            </View>

            <ScrollView 
                showsHorizontalScrollIndicator={false}
                style={ styles.main }
            >                
                
                <View style={ styles.product_base }>
                    <CheckBox
                    checked={checked}
                    onPress={toggleCheckBox}
                    style={ styles.checkbox }/>
                    <TouchableOpacity>
                        <Image 
                            style={ styles.product_image }
                            source={require('../../../public/images/product/iphone14.png')}
                        />
                    </TouchableOpacity>
                    <View style={ styles.product_items }>
                        <TouchableOpacity>
                            <Text style={ styles.product_name }>Dune Messiah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={ styles.product_description }>Frank Herbert</Text>
                        </TouchableOpacity>
                        <View style={ styles.product_price_base }>
                            <Text 
                            style={ styles.product_price }>{price}$</Text>
                            <View style={ styles.product_count }>
                                <TouchableOpacity
                                    style={ styles.addButton }
                                    onPress={ addQuantity }
                                >
                                    <AntDesign name="plus" size={18} color="black" />
                                </TouchableOpacity>
                                <TextInput 
                                    style={ styles.quantity }
                                    value={ quantity.toString() }
                                    onChangeText={ handleQuantityChange }
                                />
                                <TouchableOpacity 
                                    onPress={ removeQuantity }
                                    style={ styles.removeButton }
                                >
                                    <AntDesign name="minus" size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={ styles.product_base }>
                    <CheckBox
                    checked={checked}
                    onPress={toggleCheckBox}
                    style={ styles.checkbox }/>
                    <TouchableOpacity>
                        <Image 
                            style={ styles.product_image }
                            source={require('../../../public/images/product/iphone14.png')}
                        />
                    </TouchableOpacity>
                    <View style={ styles.product_items }>
                        <TouchableOpacity>
                            <Text style={ styles.product_name }>Dune Messiah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={ styles.product_description }>Frank Herbert</Text>
                        </TouchableOpacity>
                        <View style={ styles.product_price_base }>
                            <Text 
                            style={ styles.product_price }>{price}$</Text>
                            <View style={ styles.product_count }>
                                <TouchableOpacity
                                    style={ styles.addButton }
                                    onPress={ addQuantity }
                                >
                                    <AntDesign name="plus" size={18} color="black" />
                                </TouchableOpacity>
                                <TextInput 
                                    style={ styles.quantity }
                                    value={ quantity.toString() }
                                    onChangeText={ handleQuantityChange }
                                />
                                <TouchableOpacity 
                                    onPress={ removeQuantity }
                                    style={ styles.removeButton }
                                >
                                    <AntDesign name="minus" size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                
            </ScrollView>

            <View style={ styles.checkout }>
                <CheckBox
                    checked={checked}
                    onPress={toggleCheckBox}
                    style={ styles.checkbox }
                />
                <Text style={ styles.checkout_text }>All</Text>
                <Text style={ styles.total_text }>Total: {price}$</Text>
                <TouchableOpacity style={ styles.checkout_button }>
                    <View style={ styles.in_button }>
                        <Text style={ styles.checkout_button_text }>Checkout</Text>
                        <MaterialIcons style={ styles.checkout_icon } name="shopping-cart-checkout" size={22} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}